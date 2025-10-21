import React from 'react';
import styled from 'styled-components';

const TableWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: auto;
  max-height: 70vh; /* ajuste conforme o tamanho desejado */

  border-radius: var(--br-md);

  /* opcional: rolagem suave e discreta */
  scrollbar-width: thin;
  scrollbar-color: var(--color-gray2) transparent;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  thead {
    position: sticky;
    top: 0;
    z-index: 4;
    background-color: var(--color-gray4);
  }

  th {
    text-align: left;
    padding: 16px 16px;
    position: sticky;
    top: 0;
    z-index: 10; /* mantém acima das linhas */

    span {
      font-size: 12px;
      font-weight: 500;
      white-space: normal;
      text-align: left;
    }

    gap: 6px;
    cursor: pointer;

    svg {
      width: 12px;
      height: 12px;
      flex-shrink: 0;
    }
  }

  td {
    font-weight: 500;
    padding: 12px 16px;
    text-align: left;
  }

  @media (max-width: 768px) {
    th,
    td {
      padding: 10px 12px;
    }
  }
`;

const HeaderContent = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;

  svg {
    width: 12px;
    height: 12px;
    flex-shrink: 0;
  }
`;

const TableRow = styled.tr<{ $clickable: boolean }>`
  border-bottom: 1px solid var(--color-gray3);

  ${({ $clickable }) =>
    $clickable &&
    `
    cursor: pointer;

    &:hover {
      filter: brightness(0.95);
    }
  `}

  &:hover {
    filter: brightness(0.97);
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 24px;
  font-size: 1rem;
  color: #666;
`;

type SortDirection = 'asc' | 'desc';

export interface ISortConfig {
  key: string;
  direction: SortDirection;
}

type TableHeader = {
  key: string;
  label: string;
  onClick?: () => void;
};

type GenericTableProps<T> = {
  headers: TableHeader[];
  data: T[];
  renderRow: (item: T, index: number) => React.ReactNode;
  emptyMessage?: string;
  onRowClick?: (item: T, index: number) => void;
  sortConfig?: ISortConfig | null;
};

export function GenericTable<T>({
  headers,
  data,
  renderRow,
  emptyMessage = 'Nenhum dado encontrado.',
  onRowClick,
  sortConfig,
}: GenericTableProps<T>) {
  const renderSortIcon = (headerKey: string) => {
    if (sortConfig?.key === headerKey) {
      return sortConfig.direction === 'asc' ? (
        // ↑
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
          <path d="M160 288C147.1 288 135.4 280.2 130.4 268.2C125.4 256.2 128.2 242.5 137.4 233.4L297.4 73.4C309.9 60.9 330.2 60.9 342.7 73.4L502.7 233.4C511.9 242.6 514.6 256.3 509.6 268.3C504.6 280.3 492.9 288 480 288L160 288z" />
        </svg>
      ) : (
        // ↓
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
          <path d="M160 352C147.1 352 135.4 359.8 130.4 371.8C125.4 383.8 128.2 397.5 137.4 406.6L297.4 566.6C309.9 579.1 330.2 579.1 342.7 566.6L502.7 406.6C511.9 397.4 514.6 383.7 509.6 371.7C504.6 359.7 492.9 352 480 352L160 352z" />
        </svg>
      );
    }

    // estado neutro (⇅)
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
        <path d="M130.4 268.2C135.4 280.2 147 288 160 288L480 288C492.9 288 504.6 280.2 509.6 268.2C514.6 256.2 511.8 242.5 502.7 233.3L342.7 73.3C330.2 60.8 309.9 60.8 297.4 73.3L137.4 233.3C128.2 242.5 125.5 256.2 130.5 268.2zM130.4 371.7C125.4 383.7 128.2 397.4 137.3 406.6L297.3 566.6C309.8 579.1 330.1 579.1 342.6 566.6L502.6 406.6C511.8 397.4 514.5 383.7 509.5 371.7C504.5 359.7 492.9 352 480 352L160 352C147.1 352 135.4 359.8 130.4 371.8z" />
      </svg>
    );
  };

  return (
    <TableWrapper>
      <StyledTable>
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header.key} onClick={header.onClick} style={{ cursor: header.onClick ? 'pointer' : 'default' }}>
                <HeaderContent>
                  <span>{header.label}</span>
                  {renderSortIcon(header.key)}
                </HeaderContent>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={headers.length}>
                <EmptyState>{emptyMessage}</EmptyState>
              </td>
            </tr>
          ) : (
            data.map((item, index) => (
              <TableRow key={index} $clickable={!!onRowClick} onClick={() => onRowClick?.(item, index)}>
                {renderRow(item, index)}
              </TableRow>
            ))
          )}
        </tbody>
      </StyledTable>
    </TableWrapper>
  );
}
