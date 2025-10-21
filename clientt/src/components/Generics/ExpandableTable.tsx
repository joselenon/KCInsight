import React, { Fragment, ReactNode, useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';

import { motion, AnimatePresence } from 'framer-motion';

// Generic column definition for the table
export type Column<T> = {
  id: string;
  header: ReactNode;
  accessor?: keyof T | ((row: T) => ReactNode);
  cell?: (row: T) => ReactNode;
  align?: 'left' | 'center' | 'right';
  width?: string;
  sortable?: boolean; // clickable header to sort (default: true)
  sortValue?: (row: T) => string | number | boolean | Date | null | undefined; // value extractor for sorting
  sortComparator?: (a: T, b: T) => number; // full control comparator
};

export type ExpandableTableProps<T> = {
  columns: Column<T>[];
  data: T[];
  getRowId?: (row: T, index: number) => string | number;
  renderExpanded?: (row: T) => ReactNode;
  defaultExpandedId?: string | number | null;
  onRowToggle?: (rowId: string | number | null, row: T | null) => void;
  rowGap?: number; // visual spacing (px) between row and expanded panel
  className?: string;
  rowOnClickFn: (row: T) => void;
  headerBg?: string;
};

// Sorting types and helpers
type SortDirection = 'asc' | 'desc';
type SortState = { id: string; dir: SortDirection } | null;
type SortPrimitive = string | number | boolean | Date | null | undefined;
function getSortValue<T>(row: T, col: Column<T>): SortPrimitive {
  if (col.sortValue) return col.sortValue(row);
  if (typeof col.accessor === 'string') return (row as any)[col.accessor as keyof T] as any;
  if ((row as any)[col.id] !== undefined) return (row as any)[col.id];
  return null;
}
function comparePrimitives(a: SortPrimitive, b: SortPrimitive): number {
  if (a == null && b == null) return 0;
  if (a == null) return 1; // nulls last
  if (b == null) return -1;
  if (a instanceof Date || b instanceof Date) {
    const av = a instanceof Date ? a.getTime() : new Date(a as any).getTime();
    const bv = b instanceof Date ? b.getTime() : new Date(b as any).getTime();
    return av - bv;
  }
  const ta = typeof a;
  const tb = typeof b;
  if (ta === 'number' && tb === 'number') return (a as number) - (b as number);
  if (ta === 'boolean' && tb === 'boolean') return Number(a) - Number(b);
  return String(a).localeCompare(String(b), undefined, {
    numeric: true,
    sensitivity: 'base',
  });
}

// Wrapper to ensure responsiveness
const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  overflow-y: auto; /* garante rolagem vertical também */
  max-height: 600px; /* altura máxima visível da tabela */
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse; /* We control dividers manually */
  background: transparent; /* TABLE has no background */
`;

const THead = styled.thead<{ $bg?: string }>`
  position: sticky;
  top: 0;
  z-index: 2;
  height: 50px;

  background: ${({ $bg }) => $bg ?? 'var(--color-2)'};
  transition: all 0.2s;

  th {
    font-weight: 500;
    font-size: 12px;
    line-height: 1.25rem;
    color: var(--color-white);
    text-align: left;
    padding: 0.75rem 0.5rem;
    user-select: none;
  }

  tr th:only-child {
    border-radius: var(--br-md);
  }

  tr th:first-child:not(:only-child) {
    border-radius: var(--br-md) 0 0 var(--br-md);
  }

  tr th:last-child:not(:only-child) {
    border-radius: 0 var(--br-md) var(--br-md) 0;
  }

  th .sort-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.375rem;
    background: none;
    border: 0;
    padding: 0;
    font: inherit;
    color: var(--color-white);
    cursor: pointer;
  }

  th {
    font-size: 12px;
    font-weight: 500;
    white-space: nowrap;
    span {
      white-space: nowrap;
    }
  }

  th .sort-btn span {
    font: inherit;
    color: var(--color-white);
  }

  th[aria-sort='ascending'],
  th[aria-sort='descending'] {
    color: hsl(var(--foreground));
  }

  th .icon {
    opacity: 0.5;
    font-size: 0.75rem;
  }

  th[aria-sort='ascending'] .icon,
  th[aria-sort='descending'] .icon {
    opacity: 1;
  }
`;

const TRow = styled.tr<{ $isOpen: boolean }>`
  background: transparent; /* Rows without background */
  cursor: pointer;
  user-select: none;

  background-color: var(--color-gray5);

  td {
    font-size: 14px;
    font-weight: 500;
    padding: 0.875rem 0.5rem;
    vertical-align: middle;
  }

  /* Linha após cada row principal */
  border-bottom: ${({ $isOpen }) => ($isOpen ? 'none' : '1px solid var(--color-gray4)')};
  filter: ${({ $isOpen }) => ($isOpen ? 'brightness(0.95)' : 'none')};

  &:last-child {
    border-bottom: none; /* opcional para não ter linha após última */
  }

  &:focus-visible {
    outline: 2px solid hsl(var(--ring));
    outline-offset: -2px;
  }

  &:hover {
    filter: brightness(0.95);
  }
`;

const ExpandedRow = styled.tr.attrs({ className: 'expanded-row' })``;

// Smooth height animation using grid rows technique
const Expander = styled.div<{ $expanded: boolean; $gap: number }>`
  display: grid;
  grid-template-rows: ${({ $expanded }) => ($expanded ? '1fr' : '0fr')};
  transition: grid-template-rows 220ms cubic-bezier(0.4, 0, 0.2, 1);

  > div {
    overflow: hidden;
  }

  /* Visual panel */
  .panel {
    margin: ${({ $gap }) => `${$gap}px 0`};
    background: hsl(var(--card));
    border: 1px solid hsl(var(--border));
    border-radius: var(--radius);
    box-shadow: 0 8px 24px hsl(var(--ring) / 0.07);
  }
`;

const PanelInner = styled.div`
  padding: 0.75rem;
`;

function resolveCell<T>(row: T, col: Column<T>): ReactNode {
  if (col.cell) return col.cell(row);
  if (typeof col.accessor === 'function') return col.accessor(row);
  if (typeof col.accessor === 'string') return (row as any)[col.accessor];
  return null;
}

export function ExpandableTable<T>({
  columns,
  data,
  getRowId,
  renderExpanded,
  defaultExpandedId = null,
  onRowToggle,
  rowGap = 8,
  className,
  rowOnClickFn,
  headerBg,
}: ExpandableTableProps<T>) {
  const [expandedId, setExpandedId] = useState<string | number | null>(defaultExpandedId);

  const colCount = useMemo(() => columns.length, [columns]);

  const [sort, setSort] = useState<SortState>(null);

  const sortedData = useMemo(() => {
    if (!sort) return data;
    const col = columns.find((c) => c.id === sort.id);
    if (!col) return data;
    const dir = sort.dir === 'asc' ? 1 : -1;
    const copy = [...data];
    if (col.sortComparator) {
      return copy.sort((a, b) => dir * col.sortComparator!(a, b));
    }
    return copy.sort((a, b) => {
      const av = getSortValue(a, col);
      const bv = getSortValue(b, col);
      return dir * comparePrimitives(av, bv);
    });
  }, [data, columns, sort]);

  const handleHeaderClick = (col: Column<T>) => {
    if (col.sortable === false) return;

    setSort((prev) => {
      if (!prev || prev.id !== col.id) {
        // 1º clique: ASC
        return { id: col.id, dir: 'asc' };
      }
      if (prev.dir === 'asc') {
        // 2º clique: DESC
        return { id: col.id, dir: 'desc' };
      }
      // 3º clique: sem sort
      return null;
    });
  };

  const handleToggle = (rowId: string | number, row: T) => {
    const next = expandedId === rowId ? null : rowId;
    setExpandedId(next);
    onRowToggle?.(next, next == null ? null : row);
    rowOnClickFn(row);
  };

  useEffect(() => {
    if (defaultExpandedId != null) {
      setExpandedId(defaultExpandedId);
    }
  }, [defaultExpandedId]);

  return (
    <TableContainer className={className}>
      <StyledTable role="table">
        <THead $bg={headerBg}>
          <tr role="row">
            {columns.map((c) => {
              const isActive = sort?.id === c.id;
              const ariaSort = isActive ? (sort!.dir === 'asc' ? 'ascending' : 'descending') : undefined;
              const isSortable = c.sortable !== false; // default true

              return (
                <th
                  key={c.id}
                  role="columnheader"
                  aria-sort={ariaSort as any}
                  style={{
                    width: c.width,
                    textAlign: c.align ?? 'left',
                  }}
                >
                  {isSortable ? (
                    <button
                      type="button"
                      className="sort-btn"
                      onClick={() => handleHeaderClick(c)}
                      style={{ justifyContent: c.align === 'center' ? 'center' : 'flex-start' }}
                    >
                      <span>{c.header}</span>
                      <span className="icon" aria-hidden>
                        {isActive ? (sort!.dir === 'asc' ? '▲' : '▼') : '↕'}
                      </span>
                    </button>
                  ) : (
                    c.header
                  )}
                </th>
              );
            })}
          </tr>
        </THead>
        <tbody>
          {sortedData.map((row, i) => {
            const id = getRowId ? getRowId(row, i) : i;
            const isOpen = expandedId === id;
            return (
              <Fragment key={String(id)}>
                <TRow
                  role="row"
                  tabIndex={0}
                  aria-expanded={isOpen}
                  onClick={() => handleToggle(id, row)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleToggle(id, row);
                    }
                  }}
                  $isOpen={isOpen}
                >
                  {columns.map((col) => (
                    <td key={col.id} role="cell" style={{ textAlign: col.align ?? 'left' }}>
                      {resolveCell(row, col)}
                    </td>
                  ))}
                </TRow>

                <AnimatePresence initial={false}>
                  {isOpen && renderExpanded && (
                    <ExpandedRow>
                      <td colSpan={colCount} style={{ padding: 0 }}>
                        <motion.div
                          key="expander"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: 'easeInOut' }}
                          style={{ overflow: 'hidden' }}
                        >
                          <div className="panel">
                            <PanelInner>{renderExpanded(row)}</PanelInner>
                          </div>
                        </motion.div>
                      </td>
                    </ExpandedRow>
                  )}
                </AnimatePresence>
              </Fragment>
            );
          })}
        </tbody>
      </StyledTable>
    </TableContainer>
  );
}

const MenuList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const MenuItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.625rem 0.5rem;
  border-radius: calc(var(--radius) - 2px);
  color: hsl(var(--foreground));
  transition: background 160ms ease;

  &:hover {
    background: hsl(var(--accent));
  }
`;

function DefaultExpandedMenu() {
  return (
    <MenuList>
      <MenuItem>
        Ver detalhes <span aria-hidden>↗</span>
      </MenuItem>
      <MenuItem>
        Editar <span aria-hidden>✎</span>
      </MenuItem>
      <MenuItem>
        Excluir <span aria-hidden>⌫</span>
      </MenuItem>
    </MenuList>
  );
}

export default ExpandableTable;
