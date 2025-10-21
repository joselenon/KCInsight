// Arquivo gerado automaticamente

export type TRecurrenceCategories = 'really-low' | 'low' | 'medium' | 'high' | 'really-high';

export interface ITopicItem {
  name: string;
  slug: string;
  weight: number;
  activityCount: number;
  recurrence: TRecurrenceCategories;
}

export interface IDiscipline {
  weight: number;
  activityCount: number;
  recurrence: TRecurrenceCategories;
  topics: ITopicItem[];
}

export interface IDisciplines {
  [disciplineSlug: string]: IDiscipline;
}


export const DISCIPLINES: IDisciplines = {
  "matematica": {
    "weight": 0.24401913875598086,
    "activityCount": 765,
    "recurrence": "really-high",
    "topics": [
      {
        "name": "1 Conjuntos",
        "slug": "conjuntos",
        "weight": 0.00392156862745098,
        "activityCount": 3,
        "recurrence": "really-low"
      },
      {
        "name": "1.2 Conjuntos numéricos",
        "slug": "conjuntos_numericos",
        "weight": 0.00130718954248366,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "2 Funções",
        "slug": "funcoes",
        "weight": 0.11372549019607843,
        "activityCount": 87,
        "recurrence": "really-high"
      },
      {
        "name": "2.1 Conceito de função",
        "slug": "conceito_de_funcao",
        "weight": 0.00392156862745098,
        "activityCount": 3,
        "recurrence": "really-low"
      },
      {
        "name": "2.2 Composição de funções",
        "slug": "composicao_de_funcoes",
        "weight": 0.00130718954248366,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "2.4 Função do 1º grau",
        "slug": "funcao_do_1o_grau",
        "weight": 0.03790849673202614,
        "activityCount": 29,
        "recurrence": "high"
      },
      {
        "name": "2.5 Função do 2º grau",
        "slug": "funcao_do_2o_grau",
        "weight": 0.0196078431372549,
        "activityCount": 15,
        "recurrence": "high"
      },
      {
        "name": "2.7 Função exponencial",
        "slug": "funcao_exponencial",
        "weight": 0.00784313725490196,
        "activityCount": 6,
        "recurrence": "medium"
      },
      {
        "name": "2.8 Função logarítmica",
        "slug": "funcao_logaritmica",
        "weight": 0.01437908496732026,
        "activityCount": 11,
        "recurrence": "medium"
      },
      {
        "name": "2.9 Inequações",
        "slug": "inequacoes",
        "weight": 0.013071895424836602,
        "activityCount": 10,
        "recurrence": "medium"
      },
      {
        "name": "3 Sequências",
        "slug": "sequencias",
        "weight": 0.04183006535947712,
        "activityCount": 32,
        "recurrence": "really-high"
      },
      {
        "name": "3.2 Progressão aritmética (PA)",
        "slug": "progressao_aritmetica_pa",
        "weight": 0.02875816993464052,
        "activityCount": 22,
        "recurrence": "high"
      },
      {
        "name": "3.3 Progressão geométrica (PG)",
        "slug": "progressao_geometrica_pg",
        "weight": 0.00522875816993464,
        "activityCount": 4,
        "recurrence": "low"
      },
      {
        "name": "4 Matemática financeira",
        "slug": "matematica_financeira",
        "weight": 0.06405228758169934,
        "activityCount": 49,
        "recurrence": "really-high"
      },
      {
        "name": "5 Trigonometria",
        "slug": "trigonometria",
        "weight": 0.030065359477124184,
        "activityCount": 23,
        "recurrence": "high"
      },
      {
        "name": "5.1 Arcos e ângulos",
        "slug": "arcos_e_angulos",
        "weight": 0.00522875816993464,
        "activityCount": 4,
        "recurrence": "low"
      },
      {
        "name": "5.2 Circunferência trigonométrica",
        "slug": "circunferencia_trigonometrica",
        "weight": 0.006535947712418301,
        "activityCount": 5,
        "recurrence": "low"
      },
      {
        "name": "5.3 Seno e cosseno",
        "slug": "seno_e_cosseno",
        "weight": 0.006535947712418301,
        "activityCount": 5,
        "recurrence": "low"
      },
      {
        "name": "5.9 Funções trigonométricas",
        "slug": "funcoes_trigonometricas",
        "weight": 0.00784313725490196,
        "activityCount": 6,
        "recurrence": "medium"
      },
      {
        "name": "6 Álgebra linear",
        "slug": "algebra_linear",
        "weight": 0.030065359477124184,
        "activityCount": 23,
        "recurrence": "high"
      },
      {
        "name": "6.1 Matrizes",
        "slug": "matrizes",
        "weight": 0.00522875816993464,
        "activityCount": 4,
        "recurrence": "low"
      },
      {
        "name": "6.3 Sistemas lineares",
        "slug": "sistemas_lineares",
        "weight": 0.006535947712418301,
        "activityCount": 5,
        "recurrence": "low"
      },
      {
        "name": "7 Razões e proporções",
        "slug": "razoes_e_proporcoes",
        "weight": 0.34901960784313724,
        "activityCount": 267,
        "recurrence": "really-high"
      },
      {
        "name": "9 Análise combinatória",
        "slug": "analise_combinatoria",
        "weight": 0.04183006535947712,
        "activityCount": 32,
        "recurrence": "really-high"
      },
      {
        "name": "9.1 Princípio fundamental da contagem",
        "slug": "principio_fundamental_da_contagem",
        "weight": 0.01045751633986928,
        "activityCount": 8,
        "recurrence": "medium"
      },
      {
        "name": "9.2 Fatorial",
        "slug": "fatorial",
        "weight": 0.00261437908496732,
        "activityCount": 2,
        "recurrence": "really-low"
      },
      {
        "name": "10 Probabilidade",
        "slug": "probabilidade",
        "weight": 0.06274509803921569,
        "activityCount": 48,
        "recurrence": "really-high"
      },
      {
        "name": "10.2 Cálculo de probabilidades",
        "slug": "calculo_de_probabilidades",
        "weight": 0.030065359477124184,
        "activityCount": 23,
        "recurrence": "high"
      },
      {
        "name": "10.3 Probabilidade condicional",
        "slug": "probabilidade_condicional",
        "weight": 0.00261437908496732,
        "activityCount": 2,
        "recurrence": "really-low"
      },
      {
        "name": "11 Estatística",
        "slug": "estatistica",
        "weight": 0.11764705882352941,
        "activityCount": 90,
        "recurrence": "really-high"
      },
      {
        "name": "11.1 Representação de dados",
        "slug": "representacao_de_dados",
        "weight": 0.00261437908496732,
        "activityCount": 2,
        "recurrence": "really-low"
      },
      {
        "name": "11.3 Variáveis estatísticas",
        "slug": "variaveis_estatisticas",
        "weight": 0.01045751633986928,
        "activityCount": 8,
        "recurrence": "medium"
      },
      {
        "name": "11.4 Medidas estatísticas",
        "slug": "medidas_estatisticas",
        "weight": 0.054901960784313725,
        "activityCount": 42,
        "recurrence": "really-high"
      },
      {
        "name": "12 Geometria plana",
        "slug": "geometria_plana",
        "weight": 0.13333333333333333,
        "activityCount": 102,
        "recurrence": "really-high"
      },
      {
        "name": "12.1 Ângulos",
        "slug": "angulos",
        "weight": 0.00261437908496732,
        "activityCount": 2,
        "recurrence": "really-low"
      },
      {
        "name": "12.2 Congruência de triângulos",
        "slug": "congruencia_de_triangulos",
        "weight": 0.00392156862745098,
        "activityCount": 3,
        "recurrence": "really-low"
      },
      {
        "name": "12.3 Círculos e circunferências",
        "slug": "circulos_e_circunferencias",
        "weight": 0.022222222222222223,
        "activityCount": 17,
        "recurrence": "high"
      },
      {
        "name": "12.4 Polígonos",
        "slug": "poligonos",
        "weight": 0.01699346405228758,
        "activityCount": 13,
        "recurrence": "high"
      },
      {
        "name": "12.5 Proporções geométricas",
        "slug": "proporcoes_geometricas",
        "weight": 0.00261437908496732,
        "activityCount": 2,
        "recurrence": "really-low"
      },
      {
        "name": "12.5.2 Semelhança de triângulos",
        "slug": "semelhanca_de_triangulos",
        "weight": 0.00130718954248366,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "12.7 Pontos notáveis do triângulo",
        "slug": "pontos_notaveis_do_triangulo",
        "weight": 0.00261437908496732,
        "activityCount": 2,
        "recurrence": "really-low"
      },
      {
        "name": "12.8 Áreas de figuras planas",
        "slug": "areas_de_figuras_planas",
        "weight": 0.05620915032679739,
        "activityCount": 43,
        "recurrence": "really-high"
      },
      {
        "name": "13 Geometria de posição",
        "slug": "geometria_de_posicao",
        "weight": 0.00784313725490196,
        "activityCount": 6,
        "recurrence": "medium"
      },
      {
        "name": "13.1 Posições relativas",
        "slug": "posicoes_relativas",
        "weight": 0.00130718954248366,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "14 Geometria métrica",
        "slug": "geometria_metrica",
        "weight": 0.10196078431372549,
        "activityCount": 78,
        "recurrence": "really-high"
      },
      {
        "name": "14.1 Poliedros",
        "slug": "poliedros",
        "weight": 0.0457516339869281,
        "activityCount": 35,
        "recurrence": "really-high"
      },
      {
        "name": "14.1.1 Prismas",
        "slug": "prismas",
        "weight": 0.02483660130718954,
        "activityCount": 19,
        "recurrence": "high"
      },
      {
        "name": "14.1.2 Pirâmides",
        "slug": "piramides",
        "weight": 0.00784313725490196,
        "activityCount": 6,
        "recurrence": "medium"
      },
      {
        "name": "14.2 Cilindros",
        "slug": "cilindros",
        "weight": 0.03137254901960784,
        "activityCount": 24,
        "recurrence": "high"
      },
      {
        "name": "14.3 Cones",
        "slug": "cones",
        "weight": 0.013071895424836602,
        "activityCount": 10,
        "recurrence": "medium"
      },
      {
        "name": "14.4 Esferas",
        "slug": "esferas",
        "weight": 0.009150326797385621,
        "activityCount": 7,
        "recurrence": "medium"
      },
      {
        "name": "14.5 Troncos",
        "slug": "troncos",
        "weight": 0.006535947712418301,
        "activityCount": 5,
        "recurrence": "low"
      },
      {
        "name": "15 Geometria analítica",
        "slug": "geometria_analitica",
        "weight": 0.036601307189542485,
        "activityCount": 28,
        "recurrence": "high"
      },
      {
        "name": "15.1 Ponto",
        "slug": "ponto",
        "weight": 0.00522875816993464,
        "activityCount": 4,
        "recurrence": "low"
      },
      {
        "name": "15.2 Reta",
        "slug": "reta",
        "weight": 0.00392156862745098,
        "activityCount": 3,
        "recurrence": "really-low"
      },
      {
        "name": "15.3 Ângulos e distâncias",
        "slug": "angulos_e_distancias",
        "weight": 0.00130718954248366,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "15.4 Equações da circunferência",
        "slug": "equacoes_da_circunferencia",
        "weight": 0.00392156862745098,
        "activityCount": 3,
        "recurrence": "really-low"
      },
      {
        "name": "15.5 Cônicas",
        "slug": "conicas",
        "weight": 0.006535947712418301,
        "activityCount": 5,
        "recurrence": "low"
      },
      {
        "name": "15.5.1 Elipse",
        "slug": "elipse",
        "weight": 0.00130718954248366,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "15.5.3 Parábola",
        "slug": "parabola",
        "weight": 0.00522875816993464,
        "activityCount": 4,
        "recurrence": "low"
      },
      {
        "name": "17 Polinômios",
        "slug": "polinomios",
        "weight": 0.01568627450980392,
        "activityCount": 12,
        "recurrence": "high"
      },
      {
        "name": "17.3 Equações polinomiais",
        "slug": "equacoes_polinomiais",
        "weight": 0.011764705882352941,
        "activityCount": 9,
        "recurrence": "medium"
      },
      {
        "name": "18 Raciocínio lógico",
        "slug": "raciocinio_logico",
        "weight": 0.10718954248366012,
        "activityCount": 82,
        "recurrence": "really-high"
      }
    ]
  },
  "biologia": {
    "weight": 0.09282296650717703,
    "activityCount": 291,
    "recurrence": "really-high",
    "topics": [
      {
        "name": "1 Origem da vida",
        "slug": "origem_da_vida",
        "weight": 0.003436426116838488,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "2 Bioquímica",
        "slug": "bioquimica",
        "weight": 0.08247422680412371,
        "activityCount": 24,
        "recurrence": "really-high"
      },
      {
        "name": "2.1 Água",
        "slug": "agua",
        "weight": 0.003436426116838488,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "2.2 Sais minerais",
        "slug": "sais_minerais",
        "weight": 0.006872852233676976,
        "activityCount": 2,
        "recurrence": "low"
      },
      {
        "name": "2.3 Carboidratos",
        "slug": "carboidratos",
        "weight": 0.003436426116838488,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "2.4 Lipídios",
        "slug": "lipidios",
        "weight": 0.010309278350515464,
        "activityCount": 3,
        "recurrence": "medium"
      },
      {
        "name": "2.5 Proteínas",
        "slug": "proteinas",
        "weight": 0.006872852233676976,
        "activityCount": 2,
        "recurrence": "low"
      },
      {
        "name": "2.7 Ácidos nucleicos",
        "slug": "acidos_nucleicos",
        "weight": 0.054982817869415807,
        "activityCount": 16,
        "recurrence": "really-high"
      },
      {
        "name": "3 Biologia celular",
        "slug": "biologia_celular",
        "weight": 0.1718213058419244,
        "activityCount": 50,
        "recurrence": "really-high"
      },
      {
        "name": "3.1 Microscopia celular",
        "slug": "microscopia_celular",
        "weight": 0.003436426116838488,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "3.2 Membrana plasmática",
        "slug": "membrana_plasmatica",
        "weight": 0.037800687285223365,
        "activityCount": 11,
        "recurrence": "really-high"
      },
      {
        "name": "3.2.5 Especializações da membrana",
        "slug": "especializacoes_da_membrana",
        "weight": 0.010309278350515464,
        "activityCount": 3,
        "recurrence": "medium"
      },
      {
        "name": "3.3 Citoplasma",
        "slug": "citoplasma",
        "weight": 0.03436426116838488,
        "activityCount": 10,
        "recurrence": "high"
      },
      {
        "name": "3.3.2 Retículo endoplasmático",
        "slug": "reticulo_endoplasmatico",
        "weight": 0.006872852233676976,
        "activityCount": 2,
        "recurrence": "low"
      },
      {
        "name": "3.3.4 Complexo golgiense",
        "slug": "complexo_golgiense",
        "weight": 0.010309278350515464,
        "activityCount": 3,
        "recurrence": "medium"
      },
      {
        "name": "3.3.5 Lisossomos",
        "slug": "lisossomos",
        "weight": 0.003436426116838488,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "3.3.6 Peroxissomos",
        "slug": "peroxissomos",
        "weight": 0.003436426116838488,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "3.3.7 Mitocôndrias",
        "slug": "mitocondrias",
        "weight": 0.01718213058419244,
        "activityCount": 5,
        "recurrence": "medium"
      },
      {
        "name": "3.3.8 Cloroplastos",
        "slug": "cloroplastos",
        "weight": 0.006872852233676976,
        "activityCount": 2,
        "recurrence": "low"
      },
      {
        "name": "3.3.9 Vacúolos da célula vegetal",
        "slug": "vacuolos_da_celula_vegetal",
        "weight": 0.003436426116838488,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "3.4 Núcleo e cromossomos",
        "slug": "nucleo_e_cromossomos",
        "weight": 0.006872852233676976,
        "activityCount": 2,
        "recurrence": "low"
      },
      {
        "name": "3.5 Divisão celular",
        "slug": "divisao_celular",
        "weight": 0.013745704467353952,
        "activityCount": 4,
        "recurrence": "medium"
      },
      {
        "name": "3.5.1 Ciclo celular",
        "slug": "ciclo_celular",
        "weight": 0.003436426116838488,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "3.5.2 Mitose",
        "slug": "mitose",
        "weight": 0.006872852233676976,
        "activityCount": 2,
        "recurrence": "low"
      },
      {
        "name": "3.5.3 Meiose",
        "slug": "meiose",
        "weight": 0.006872852233676976,
        "activityCount": 2,
        "recurrence": "low"
      },
      {
        "name": "3.5.4 Gametogênese humana",
        "slug": "gametogenese_humana",
        "weight": 0.003436426116838488,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "3.6 Metabolismo energético",
        "slug": "metabolismo_energetico",
        "weight": 0.05154639175257732,
        "activityCount": 15,
        "recurrence": "really-high"
      },
      {
        "name": "3.6.2 Respiração celular",
        "slug": "respiracao_celular",
        "weight": 0.020618556701030927,
        "activityCount": 6,
        "recurrence": "high"
      },
      {
        "name": "3.6.3 Fermentação",
        "slug": "fermentacao",
        "weight": 0.006872852233676976,
        "activityCount": 2,
        "recurrence": "low"
      },
      {
        "name": "3.6.4 Fotossíntese",
        "slug": "fotossintese",
        "weight": 0.020618556701030927,
        "activityCount": 6,
        "recurrence": "high"
      },
      {
        "name": "3.7 Ácidos nucleicos e síntese proteica",
        "slug": "acidos_nucleicos_e_sintese_proteica",
        "weight": 0.030927835051546393,
        "activityCount": 9,
        "recurrence": "high"
      },
      {
        "name": "4 Histologia animal",
        "slug": "histologia_animal",
        "weight": 0.03436426116838488,
        "activityCount": 10,
        "recurrence": "high"
      },
      {
        "name": "4.1 Tecido epitelial",
        "slug": "tecido_epitelial",
        "weight": 0.003436426116838488,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "4.2 Tecido conjuntivo",
        "slug": "tecido_conjuntivo",
        "weight": 0.013745704467353952,
        "activityCount": 4,
        "recurrence": "medium"
      },
      {
        "name": "4.3 Tecido sanguíneo",
        "slug": "tecido_sanguineo",
        "weight": 0.024054982817869417,
        "activityCount": 7,
        "recurrence": "high"
      },
      {
        "name": "4.5 Tecido nervoso",
        "slug": "tecido_nervoso",
        "weight": 0.003436426116838488,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "5 Reprodução humana",
        "slug": "reproducao_humana",
        "weight": 0.010309278350515464,
        "activityCount": 3,
        "recurrence": "medium"
      },
      {
        "name": "5.1 Sistema genital feminino",
        "slug": "sistema_genital_feminino",
        "weight": 0.003436426116838488,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "6 Embriologia animal",
        "slug": "embriologia_animal",
        "weight": 0.003436426116838488,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "7 Classificação dos seres vivos",
        "slug": "classificacao_dos_seres_vivos",
        "weight": 0.010309278350515464,
        "activityCount": 3,
        "recurrence": "medium"
      },
      {
        "name": "8 Vírus",
        "slug": "virus",
        "weight": 0.044673539518900345,
        "activityCount": 13,
        "recurrence": "really-high"
      },
      {
        "name": "9 Bactérias e arqueas",
        "slug": "bacterias_e_arqueas",
        "weight": 0.027491408934707903,
        "activityCount": 8,
        "recurrence": "high"
      },
      {
        "name": "11 Protozoários",
        "slug": "protozoarios",
        "weight": 0.013745704467353952,
        "activityCount": 4,
        "recurrence": "medium"
      },
      {
        "name": "12 Fungos",
        "slug": "fungos",
        "weight": 0.003436426116838488,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "13 Botânica",
        "slug": "botanica",
        "weight": 0.058419243986254296,
        "activityCount": 17,
        "recurrence": "really-high"
      },
      {
        "name": "13.1 Características das plantas",
        "slug": "caracteristicas_das_plantas",
        "weight": 0.020618556701030927,
        "activityCount": 6,
        "recurrence": "high"
      },
      {
        "name": "13.4 Gimnospermas",
        "slug": "gimnospermas",
        "weight": 0.003436426116838488,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "13.5 Angiospermas",
        "slug": "angiospermas",
        "weight": 0.006872852233676976,
        "activityCount": 2,
        "recurrence": "low"
      },
      {
        "name": "13.6 Morfologia das plantas",
        "slug": "morfologia_das_plantas",
        "weight": 0.006872852233676976,
        "activityCount": 2,
        "recurrence": "low"
      },
      {
        "name": "13.7 Tecidos vegetais",
        "slug": "tecidos_vegetais",
        "weight": 0.010309278350515464,
        "activityCount": 3,
        "recurrence": "medium"
      },
      {
        "name": "13.8 Fisiologia vegetal",
        "slug": "fisiologia_vegetal",
        "weight": 0.037800687285223365,
        "activityCount": 11,
        "recurrence": "really-high"
      },
      {
        "name": "13.8.3 Hormônios vegetais",
        "slug": "hormonios_vegetais",
        "weight": 0.010309278350515464,
        "activityCount": 3,
        "recurrence": "medium"
      },
      {
        "name": "13.8.4 Movimentos vegetais",
        "slug": "movimentos_vegetais",
        "weight": 0.003436426116838488,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "14 Zoologia",
        "slug": "zoologia",
        "weight": 0.058419243986254296,
        "activityCount": 17,
        "recurrence": "really-high"
      },
      {
        "name": "14.3 Platelmintos",
        "slug": "platelmintos",
        "weight": 0.006872852233676976,
        "activityCount": 2,
        "recurrence": "low"
      },
      {
        "name": "14.4 Nematódeos",
        "slug": "nematodeos",
        "weight": 0.003436426116838488,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "14.7 Artrópodes",
        "slug": "artropodes",
        "weight": 0.024054982817869417,
        "activityCount": 7,
        "recurrence": "high"
      },
      {
        "name": "14.9 Cordados",
        "slug": "cordados",
        "weight": 0.030927835051546393,
        "activityCount": 9,
        "recurrence": "high"
      },
      {
        "name": "14.9.2 Peixes",
        "slug": "peixes",
        "weight": 0.003436426116838488,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "14.9.3 Anfíbios",
        "slug": "anfibios",
        "weight": 0.006872852233676976,
        "activityCount": 2,
        "recurrence": "low"
      },
      {
        "name": "14.9.4 Répteis",
        "slug": "repteis",
        "weight": 0.010309278350515464,
        "activityCount": 3,
        "recurrence": "medium"
      },
      {
        "name": "14.9.5 Aves",
        "slug": "aves",
        "weight": 0.010309278350515464,
        "activityCount": 3,
        "recurrence": "medium"
      },
      {
        "name": "14.9.6 Mamíferos",
        "slug": "mamiferos",
        "weight": 0.003436426116838488,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "15 Anatomofisiologia humana",
        "slug": "anatomofisiologia_humana",
        "weight": 0.13745704467353953,
        "activityCount": 40,
        "recurrence": "really-high"
      },
      {
        "name": "15.1 Sistema digestório",
        "slug": "sistema_digestorio",
        "weight": 0.030927835051546393,
        "activityCount": 9,
        "recurrence": "high"
      },
      {
        "name": "15.3 Sistema imunológico",
        "slug": "sistema_imunologico",
        "weight": 0.058419243986254296,
        "activityCount": 17,
        "recurrence": "really-high"
      },
      {
        "name": "15.4 Sistema respiratório",
        "slug": "sistema_respiratorio",
        "weight": 0.003436426116838488,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "15.5 Sistema urinário",
        "slug": "sistema_urinario",
        "weight": 0.010309278350515464,
        "activityCount": 3,
        "recurrence": "medium"
      },
      {
        "name": "15.6 Sistema muscular",
        "slug": "sistema_muscular",
        "weight": 0.003436426116838488,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "15.7 Sistema esquelético",
        "slug": "sistema_esqueletico",
        "weight": 0.003436426116838488,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "15.8 Sistema nervoso",
        "slug": "sistema_nervoso",
        "weight": 0.003436426116838488,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "15.9 Sistema endócrino",
        "slug": "sistema_endocrino",
        "weight": 0.024054982817869417,
        "activityCount": 7,
        "recurrence": "high"
      },
      {
        "name": "16 Genética",
        "slug": "genetica",
        "weight": 0.10309278350515463,
        "activityCount": 30,
        "recurrence": "really-high"
      },
      {
        "name": "16.2 Primeira lei de Mendel",
        "slug": "primeira_lei_de_mendel",
        "weight": 0.006872852233676976,
        "activityCount": 2,
        "recurrence": "low"
      },
      {
        "name": "16.4 Grupos sanguíneos em humanos",
        "slug": "grupos_sanguineos_em_humanos",
        "weight": 0.003436426116838488,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "16.5 Segunda lei de Mendel",
        "slug": "segunda_lei_de_mendel",
        "weight": 0.003436426116838488,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "16.6 Interações gênicas",
        "slug": "interacoes_genicas",
        "weight": 0.003436426116838488,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "16.9 Genoma humano e cromossomos sexuais",
        "slug": "genoma_humano_e_cromossomos_sexuais",
        "weight": 0.020618556701030927,
        "activityCount": 6,
        "recurrence": "high"
      },
      {
        "name": "16.10 Mutações gênicas e cromossômicas",
        "slug": "mutacoes_genicas_e_cromossomicas",
        "weight": 0.013745704467353952,
        "activityCount": 4,
        "recurrence": "medium"
      },
      {
        "name": "16.11 Aplicações da Genética",
        "slug": "aplicacoes_da_genetica",
        "weight": 0.027491408934707903,
        "activityCount": 8,
        "recurrence": "high"
      },
      {
        "name": "17 Evolução biológica",
        "slug": "evolucao_biologica",
        "weight": 0.06872852233676977,
        "activityCount": 20,
        "recurrence": "really-high"
      },
      {
        "name": "17.1 Teorias evolutivas",
        "slug": "teorias_evolutivas",
        "weight": 0.003436426116838488,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "17.2 Evidências da evolução",
        "slug": "evidencias_da_evolucao",
        "weight": 0.027491408934707903,
        "activityCount": 8,
        "recurrence": "high"
      },
      {
        "name": "17.3 Fatores evolutivos",
        "slug": "fatores_evolutivos",
        "weight": 0.010309278350515464,
        "activityCount": 3,
        "recurrence": "medium"
      },
      {
        "name": "17.5 Especiação",
        "slug": "especiacao",
        "weight": 0.010309278350515464,
        "activityCount": 3,
        "recurrence": "medium"
      },
      {
        "name": "18 Ecologia",
        "slug": "ecologia",
        "weight": 0.36769759450171824,
        "activityCount": 107,
        "recurrence": "really-high"
      },
      {
        "name": "18.2 Teias e cadeias alimentares",
        "slug": "teias_e_cadeias_alimentares",
        "weight": 0.048109965635738834,
        "activityCount": 14,
        "recurrence": "really-high"
      },
      {
        "name": "18.3 Fluxo de energia e níveis tróficos",
        "slug": "fluxo_de_energia_e_niveis_troficos",
        "weight": 0.07560137457044673,
        "activityCount": 22,
        "recurrence": "really-high"
      },
      {
        "name": "18.4 Ciclos biogeoquímicos",
        "slug": "ciclos_biogeoquimicos",
        "weight": 0.058419243986254296,
        "activityCount": 17,
        "recurrence": "really-high"
      },
      {
        "name": "18.4.2 Ciclo do carbono",
        "slug": "ciclo_do_carbono",
        "weight": 0.024054982817869417,
        "activityCount": 7,
        "recurrence": "high"
      },
      {
        "name": "18.4.3 Ciclo do nitrogênio",
        "slug": "ciclo_do_nitrogenio",
        "weight": 0.020618556701030927,
        "activityCount": 6,
        "recurrence": "high"
      },
      {
        "name": "18.5 Dinâmica de populações",
        "slug": "dinamica_de_populacoes",
        "weight": 0.013745704467353952,
        "activityCount": 4,
        "recurrence": "medium"
      },
      {
        "name": "18.6 Relações ecológicas",
        "slug": "relacoes_ecologicas",
        "weight": 0.041237113402061855,
        "activityCount": 12,
        "recurrence": "really-high"
      },
      {
        "name": "18.7 Sucessão ecológica",
        "slug": "sucessao_ecologica",
        "weight": 0.020618556701030927,
        "activityCount": 6,
        "recurrence": "high"
      },
      {
        "name": "18.8 Biomas do mundo",
        "slug": "biomas_do_mundo",
        "weight": 0.010309278350515464,
        "activityCount": 3,
        "recurrence": "medium"
      },
      {
        "name": "18.9 Biomas brasileiros",
        "slug": "biomas_brasileiros",
        "weight": 0.020618556701030927,
        "activityCount": 6,
        "recurrence": "high"
      },
      {
        "name": "18.10 Humanidade e ambiente",
        "slug": "humanidade_e_ambiente",
        "weight": 0.1718213058419244,
        "activityCount": 50,
        "recurrence": "really-high"
      },
      {
        "name": "18.10.1 Poluição atmosférica",
        "slug": "poluicao_atmosferica",
        "weight": 0.03436426116838488,
        "activityCount": 10,
        "recurrence": "high"
      },
      {
        "name": "18.10.2 Poluição das águas e do solo",
        "slug": "poluicao_das_aguas_e_do_solo",
        "weight": 0.054982817869415807,
        "activityCount": 16,
        "recurrence": "really-high"
      },
      {
        "name": "18.10.3 Desmatamento",
        "slug": "desmatamento",
        "weight": 0.01718213058419244,
        "activityCount": 5,
        "recurrence": "medium"
      },
      {
        "name": "18.10.4 Introdução de espécies exóticas",
        "slug": "introducao_de_especies_exoticas",
        "weight": 0.003436426116838488,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "18.10.6 Preservação ambiental",
        "slug": "preservacao_ambiental",
        "weight": 0.08934707903780069,
        "activityCount": 26,
        "recurrence": "really-high"
      }
    ]
  },
  "quimica": {
    "weight": 0.07496012759170653,
    "activityCount": 235,
    "recurrence": "medium",
    "topics": [
      {
        "name": "1 Propriedades da matéria",
        "slug": "propriedades_da_materia",
        "weight": 0.11063829787234042,
        "activityCount": 26,
        "recurrence": "really-high"
      },
      {
        "name": "1.1 Massa, volume e densidade",
        "slug": "massa_volume_e_densidade",
        "weight": 0.029787234042553193,
        "activityCount": 7,
        "recurrence": "high"
      },
      {
        "name": "1.2 Estados físicos e suas mudanças",
        "slug": "estados_fisicos_e_suas_mudancas",
        "weight": 0.01702127659574468,
        "activityCount": 4,
        "recurrence": "medium"
      },
      {
        "name": "1.3 Transformações químicas",
        "slug": "transformacoes_quimicas",
        "weight": 0.02127659574468085,
        "activityCount": 5,
        "recurrence": "medium"
      },
      {
        "name": "2 Separação de misturas",
        "slug": "separacao_de_misturas",
        "weight": 0.09361702127659574,
        "activityCount": 22,
        "recurrence": "really-high"
      },
      {
        "name": "3 Atomística",
        "slug": "atomistica",
        "weight": 0.03829787234042553,
        "activityCount": 9,
        "recurrence": "high"
      },
      {
        "name": "3.1 Modelos atômicos",
        "slug": "modelos_atomicos",
        "weight": 0.00851063829787234,
        "activityCount": 2,
        "recurrence": "low"
      },
      {
        "name": "3.2 Composição do átomo",
        "slug": "composicao_do_atomo",
        "weight": 0.01702127659574468,
        "activityCount": 4,
        "recurrence": "medium"
      },
      {
        "name": "4 Tabela periódica",
        "slug": "tabela_periodica",
        "weight": 0.01276595744680851,
        "activityCount": 3,
        "recurrence": "low"
      },
      {
        "name": "4.2 Propriedades periódicas",
        "slug": "propriedades_periodicas",
        "weight": 0.00851063829787234,
        "activityCount": 2,
        "recurrence": "low"
      },
      {
        "name": "5 Ligações químicas",
        "slug": "ligacoes_quimicas",
        "weight": 0.08085106382978724,
        "activityCount": 19,
        "recurrence": "really-high"
      },
      {
        "name": "5.2 Ligações iônicas",
        "slug": "ligacoes_ionicas",
        "weight": 0.01702127659574468,
        "activityCount": 4,
        "recurrence": "medium"
      },
      {
        "name": "5.3 Ligações covalentes",
        "slug": "ligacoes_covalentes",
        "weight": 0.029787234042553193,
        "activityCount": 7,
        "recurrence": "high"
      },
      {
        "name": "5.4 Ligações metálicas",
        "slug": "ligacoes_metalicas",
        "weight": 0.00425531914893617,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "5.7 Geometria molecular",
        "slug": "geometria_molecular",
        "weight": 0.01702127659574468,
        "activityCount": 4,
        "recurrence": "medium"
      },
      {
        "name": "5.8 Polaridade das ligações",
        "slug": "polaridade_das_ligacoes",
        "weight": 0.01702127659574468,
        "activityCount": 4,
        "recurrence": "medium"
      },
      {
        "name": "5.9 Polaridade das moléculas",
        "slug": "polaridade_das_moleculas",
        "weight": 0.00851063829787234,
        "activityCount": 2,
        "recurrence": "low"
      },
      {
        "name": "5.10 Interações intermoleculares",
        "slug": "interacoes_intermoleculares",
        "weight": 0.029787234042553193,
        "activityCount": 7,
        "recurrence": "high"
      },
      {
        "name": "6 Química inorgânica",
        "slug": "quimica_inorganica",
        "weight": 0.07659574468085106,
        "activityCount": 18,
        "recurrence": "really-high"
      },
      {
        "name": "6.1 Teoria ácido-base",
        "slug": "teoria_acidobase",
        "weight": 0.00851063829787234,
        "activityCount": 2,
        "recurrence": "low"
      },
      {
        "name": "6.2 Ácidos",
        "slug": "acidos",
        "weight": 0.01702127659574468,
        "activityCount": 4,
        "recurrence": "medium"
      },
      {
        "name": "6.3 Bases",
        "slug": "bases",
        "weight": 0.02127659574468085,
        "activityCount": 5,
        "recurrence": "medium"
      },
      {
        "name": "6.4 Sais",
        "slug": "sais",
        "weight": 0.00851063829787234,
        "activityCount": 2,
        "recurrence": "low"
      },
      {
        "name": "6.5 Óxidos",
        "slug": "oxidos",
        "weight": 0.00851063829787234,
        "activityCount": 2,
        "recurrence": "low"
      },
      {
        "name": "6.6 Reações inorgânicas",
        "slug": "reacoes_inorganicas",
        "weight": 0.03404255319148936,
        "activityCount": 8,
        "recurrence": "high"
      },
      {
        "name": "7 Estequiometria",
        "slug": "estequiometria",
        "weight": 0.11914893617021277,
        "activityCount": 28,
        "recurrence": "really-high"
      },
      {
        "name": "7.1 Massa atômica e molecular",
        "slug": "massa_atomica_e_molecular",
        "weight": 0.01702127659574468,
        "activityCount": 4,
        "recurrence": "medium"
      },
      {
        "name": "7.2 Mol e massa molar",
        "slug": "mol_e_massa_molar",
        "weight": 0.029787234042553193,
        "activityCount": 7,
        "recurrence": "high"
      },
      {
        "name": "7.4 Cálculo estequiométrico",
        "slug": "calculo_estequiometrico",
        "weight": 0.07659574468085106,
        "activityCount": 18,
        "recurrence": "really-high"
      },
      {
        "name": "8 Termoquímica",
        "slug": "termoquimica",
        "weight": 0.04680851063829787,
        "activityCount": 11,
        "recurrence": "really-high"
      },
      {
        "name": "8.1 Fundamentos da Termoquímica",
        "slug": "fundamentos_da_termoquimica",
        "weight": 0.00425531914893617,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "8.2 Variação de entalpia",
        "slug": "variacao_de_entalpia",
        "weight": 0.01702127659574468,
        "activityCount": 4,
        "recurrence": "medium"
      },
      {
        "name": "8.3 Lei de Hess",
        "slug": "lei_de_hess",
        "weight": 0.00425531914893617,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "8.4 Entalpia de formação",
        "slug": "entalpia_de_formacao",
        "weight": 0.00851063829787234,
        "activityCount": 2,
        "recurrence": "low"
      },
      {
        "name": "9 Soluções",
        "slug": "solucoes",
        "weight": 0.07234042553191489,
        "activityCount": 17,
        "recurrence": "really-high"
      },
      {
        "name": "9.3 Concentração das soluções",
        "slug": "concentracao_das_solucoes",
        "weight": 0.03404255319148936,
        "activityCount": 8,
        "recurrence": "high"
      },
      {
        "name": "9.5 Propriedades coligativas",
        "slug": "propriedades_coligativas",
        "weight": 0.00425531914893617,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "10 Cinética química",
        "slug": "cinetica_quimica",
        "weight": 0.01276595744680851,
        "activityCount": 3,
        "recurrence": "low"
      },
      {
        "name": "10.1 Velocidade de uma reação",
        "slug": "velocidade_de_uma_reacao",
        "weight": 0.00425531914893617,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "11 Equilíbrio químico",
        "slug": "equilibrio_quimico",
        "weight": 0.05531914893617021,
        "activityCount": 13,
        "recurrence": "really-high"
      },
      {
        "name": "11.2 Deslocamento de equilíbrio",
        "slug": "deslocamento_de_equilibrio",
        "weight": 0.029787234042553193,
        "activityCount": 7,
        "recurrence": "high"
      },
      {
        "name": "11.3 Equilíbrios ácido-base",
        "slug": "equilibrios_acidobase",
        "weight": 0.00425531914893617,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "11.5 Equilíbrios de solubilidade",
        "slug": "equilibrios_de_solubilidade",
        "weight": 0.00425531914893617,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "12 Oxirredução",
        "slug": "oxirreducao",
        "weight": 0.06808510638297872,
        "activityCount": 16,
        "recurrence": "really-high"
      },
      {
        "name": "12.1 Número de oxidação",
        "slug": "numero_de_oxidacao",
        "weight": 0.01702127659574468,
        "activityCount": 4,
        "recurrence": "medium"
      },
      {
        "name": "12.2 Reações de oxirredução",
        "slug": "reacoes_de_oxirreducao",
        "weight": 0.01276595744680851,
        "activityCount": 3,
        "recurrence": "low"
      },
      {
        "name": "13 Eletroquímica",
        "slug": "eletroquimica",
        "weight": 0.11063829787234042,
        "activityCount": 26,
        "recurrence": "really-high"
      },
      {
        "name": "13.2 Pilhas e baterias",
        "slug": "pilhas_e_baterias",
        "weight": 0.03829787234042553,
        "activityCount": 9,
        "recurrence": "high"
      },
      {
        "name": "13.3 Eletrólise",
        "slug": "eletrolise",
        "weight": 0.02553191489361702,
        "activityCount": 6,
        "recurrence": "high"
      },
      {
        "name": "14 Gases",
        "slug": "gases",
        "weight": 0.01276595744680851,
        "activityCount": 3,
        "recurrence": "low"
      },
      {
        "name": "14.1 Teoria cinética dos gases",
        "slug": "teoria_cinetica_dos_gases",
        "weight": 0.00425531914893617,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "14.2 Leis dos gases",
        "slug": "leis_dos_gases",
        "weight": 0.00425531914893617,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "14.3 Estequiometria de gases",
        "slug": "estequiometria_de_gases",
        "weight": 0.00425531914893617,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "15 Química orgânica",
        "slug": "quimica_organica",
        "weight": 0.30638297872340425,
        "activityCount": 72,
        "recurrence": "really-high"
      },
      {
        "name": "15.1 Cadeias carbônicas",
        "slug": "cadeias_carbonicas",
        "weight": 0.05106382978723404,
        "activityCount": 12,
        "recurrence": "really-high"
      },
      {
        "name": "15.2 Geometria de compostos orgânicos",
        "slug": "geometria_de_compostos_organicos",
        "weight": 0.00851063829787234,
        "activityCount": 2,
        "recurrence": "low"
      },
      {
        "name": "15.3 Polaridade de compostos orgânicos",
        "slug": "polaridade_de_compostos_organicos",
        "weight": 0.00425531914893617,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "15.4 Nomenclatura de compostos orgânicos",
        "slug": "nomenclatura_de_compostos_organicos",
        "weight": 0.00425531914893617,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "15.5 Hidrocarbonetos",
        "slug": "hidrocarbonetos",
        "weight": 0.029787234042553193,
        "activityCount": 7,
        "recurrence": "high"
      },
      {
        "name": "15.6 Compostos oxigenados",
        "slug": "compostos_oxigenados",
        "weight": 0.1148936170212766,
        "activityCount": 27,
        "recurrence": "really-high"
      },
      {
        "name": "15.6.1 Álcoois",
        "slug": "alcoois",
        "weight": 0.00851063829787234,
        "activityCount": 2,
        "recurrence": "low"
      },
      {
        "name": "15.6.2 Fenóis",
        "slug": "fenois",
        "weight": 0.00851063829787234,
        "activityCount": 2,
        "recurrence": "low"
      },
      {
        "name": "15.6.3 Aldeídos",
        "slug": "aldeidos",
        "weight": 0.00425531914893617,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "15.6.4 Cetonas",
        "slug": "cetonas",
        "weight": 0.00851063829787234,
        "activityCount": 2,
        "recurrence": "low"
      },
      {
        "name": "15.6.5 Ácidos carboxílicos",
        "slug": "acidos_carboxilicos",
        "weight": 0.01276595744680851,
        "activityCount": 3,
        "recurrence": "low"
      },
      {
        "name": "15.6.6 Ésteres e sabões",
        "slug": "esteres_e_saboes",
        "weight": 0.029787234042553193,
        "activityCount": 7,
        "recurrence": "high"
      },
      {
        "name": "15.6.7 Éteres",
        "slug": "eteres",
        "weight": 0.00425531914893617,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "15.7 Compostos nitrogenados",
        "slug": "compostos_nitrogenados",
        "weight": 0.01702127659574468,
        "activityCount": 4,
        "recurrence": "medium"
      },
      {
        "name": "15.7.3 Amidas",
        "slug": "amidas",
        "weight": 0.00425531914893617,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "15.8 Reações orgânicas",
        "slug": "reacoes_organicas",
        "weight": 0.03829787234042553,
        "activityCount": 9,
        "recurrence": "high"
      },
      {
        "name": "15.9 Acidez e basicidade de compostos orgânicos",
        "slug": "acidez_e_basicidade_de_compostos_organicos",
        "weight": 0.00851063829787234,
        "activityCount": 2,
        "recurrence": "low"
      },
      {
        "name": "15.10 Isomeria",
        "slug": "isomeria",
        "weight": 0.029787234042553193,
        "activityCount": 7,
        "recurrence": "high"
      },
      {
        "name": "15.11 Polímeros",
        "slug": "polimeros",
        "weight": 0.02127659574468085,
        "activityCount": 5,
        "recurrence": "medium"
      },
      {
        "name": "15.12 Bioquímica",
        "slug": "bioquimica",
        "weight": 0.01702127659574468,
        "activityCount": 4,
        "recurrence": "medium"
      },
      {
        "name": "15.12.1 Carboidratos",
        "slug": "carboidratos",
        "weight": 0.00425531914893617,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "15.13 Recursos orgânicos",
        "slug": "recursos_organicos",
        "weight": 0.02127659574468085,
        "activityCount": 5,
        "recurrence": "medium"
      },
      {
        "name": "15.13.1 Petróleo",
        "slug": "petroleo",
        "weight": 0.00851063829787234,
        "activityCount": 2,
        "recurrence": "low"
      },
      {
        "name": "15.13.5 Biocombustíveis",
        "slug": "biocombustiveis",
        "weight": 0.01276595744680851,
        "activityCount": 3,
        "recurrence": "low"
      },
      {
        "name": "16 Radioatividade",
        "slug": "radioatividade",
        "weight": 0.05106382978723404,
        "activityCount": 12,
        "recurrence": "really-high"
      }
    ]
  },
  "fisica": {
    "weight": 0.07623604465709728,
    "activityCount": 239,
    "recurrence": "medium",
    "topics": [
      {
        "name": "1 Cinemática",
        "slug": "cinematica",
        "weight": 0.1087866108786611,
        "activityCount": 26,
        "recurrence": "really-high"
      },
      {
        "name": "1.1 Movimento uniforme (MU)",
        "slug": "movimento_uniforme_mu",
        "weight": 0.02092050209205021,
        "activityCount": 5,
        "recurrence": "high"
      },
      {
        "name": "1.2 Movimento uniformemente variado (MUV)",
        "slug": "movimento_uniformemente_variado_muv",
        "weight": 0.02510460251046025,
        "activityCount": 6,
        "recurrence": "high"
      },
      {
        "name": "1.3 Movimentos verticais",
        "slug": "movimentos_verticais",
        "weight": 0.0041841004184100415,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "1.5 Cinemática vetorial",
        "slug": "cinematica_vetorial",
        "weight": 0.008368200836820083,
        "activityCount": 2,
        "recurrence": "low"
      },
      {
        "name": "1.7 Movimentos circulares",
        "slug": "movimentos_circulares",
        "weight": 0.03765690376569038,
        "activityCount": 9,
        "recurrence": "really-high"
      },
      {
        "name": "1.7.1 Grandezas angulares",
        "slug": "grandezas_angulares",
        "weight": 0.0041841004184100415,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "1.7.2 Movimento circular uniforme (MCU)",
        "slug": "movimento_circular_uniforme_mcu",
        "weight": 0.016736401673640166,
        "activityCount": 4,
        "recurrence": "high"
      },
      {
        "name": "1.7.3 Movimento circular uniformemente variado (MCUV)",
        "slug": "movimento_circular_uniformemente_variado_mcuv",
        "weight": 0.0041841004184100415,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "2 Dinâmica",
        "slug": "dinamica",
        "weight": 0.10460251046025104,
        "activityCount": 25,
        "recurrence": "really-high"
      },
      {
        "name": "2.2 Forças de atrito",
        "slug": "forcas_de_atrito",
        "weight": 0.008368200836820083,
        "activityCount": 2,
        "recurrence": "low"
      },
      {
        "name": "2.4 Aplicações das Leis de Newton",
        "slug": "aplicacoes_das_leis_de_newton",
        "weight": 0.06694560669456066,
        "activityCount": 16,
        "recurrence": "really-high"
      },
      {
        "name": "2.4.1 Sistemas de blocos",
        "slug": "sistemas_de_blocos",
        "weight": 0.0041841004184100415,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "2.4.3 Força elástica",
        "slug": "forca_elastica",
        "weight": 0.008368200836820083,
        "activityCount": 2,
        "recurrence": "low"
      },
      {
        "name": "2.4.4 Polias",
        "slug": "polias",
        "weight": 0.012552301255230125,
        "activityCount": 3,
        "recurrence": "medium"
      },
      {
        "name": "3 Energia mecânica",
        "slug": "energia_mecanica",
        "weight": 0.09205020920502092,
        "activityCount": 22,
        "recurrence": "really-high"
      },
      {
        "name": "3.1 Trabalho",
        "slug": "trabalho",
        "weight": 0.03765690376569038,
        "activityCount": 9,
        "recurrence": "really-high"
      },
      {
        "name": "3.2 Potência mecânica",
        "slug": "potencia_mecanica",
        "weight": 0.008368200836820083,
        "activityCount": 2,
        "recurrence": "low"
      },
      {
        "name": "3.3 Energia cinética",
        "slug": "energia_cinetica",
        "weight": 0.016736401673640166,
        "activityCount": 4,
        "recurrence": "high"
      },
      {
        "name": "3.4 Energia potencial",
        "slug": "energia_potencial",
        "weight": 0.0041841004184100415,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "3.4.1 Energia potencial gravitacional",
        "slug": "energia_potencial_gravitacional",
        "weight": 0.0041841004184100415,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "3.5 Conservação da energia mecânica",
        "slug": "conservacao_da_energia_mecanica",
        "weight": 0.02510460251046025,
        "activityCount": 6,
        "recurrence": "high"
      },
      {
        "name": "3.6 Impulso e quantidade de movimento",
        "slug": "impulso_e_quantidade_de_movimento",
        "weight": 0.02092050209205021,
        "activityCount": 5,
        "recurrence": "high"
      },
      {
        "name": "4 Gravitação universal",
        "slug": "gravitacao_universal",
        "weight": 0.02092050209205021,
        "activityCount": 5,
        "recurrence": "high"
      },
      {
        "name": "4.2 Leis de Kepler",
        "slug": "leis_de_kepler",
        "weight": 0.012552301255230125,
        "activityCount": 3,
        "recurrence": "medium"
      },
      {
        "name": "4.3 Força gravitacional",
        "slug": "forca_gravitacional",
        "weight": 0.0041841004184100415,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "5 Estática",
        "slug": "estatica",
        "weight": 0.016736401673640166,
        "activityCount": 4,
        "recurrence": "high"
      },
      {
        "name": "6 Hidrostática",
        "slug": "hidrostatica",
        "weight": 0.0502092050209205,
        "activityCount": 12,
        "recurrence": "really-high"
      },
      {
        "name": "6.1 Pressão",
        "slug": "pressao",
        "weight": 0.02510460251046025,
        "activityCount": 6,
        "recurrence": "high"
      },
      {
        "name": "6.2 Massa específica e densidade",
        "slug": "massa_especifica_e_densidade",
        "weight": 0.008368200836820083,
        "activityCount": 2,
        "recurrence": "low"
      },
      {
        "name": "6.3 Teorema de Stevin",
        "slug": "teorema_de_stevin",
        "weight": 0.012552301255230125,
        "activityCount": 3,
        "recurrence": "medium"
      },
      {
        "name": "6.5 Teorema de Pascal",
        "slug": "teorema_de_pascal",
        "weight": 0.0041841004184100415,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "6.6 Empuxo",
        "slug": "empuxo",
        "weight": 0.008368200836820083,
        "activityCount": 2,
        "recurrence": "low"
      },
      {
        "name": "8 Termologia",
        "slug": "termologia",
        "weight": 0.17573221757322174,
        "activityCount": 42,
        "recurrence": "really-high"
      },
      {
        "name": "8.1 Termometria",
        "slug": "termometria",
        "weight": 0.0041841004184100415,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "8.1.2 Escalas termométricas",
        "slug": "escalas_termometricas",
        "weight": 0.0041841004184100415,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "8.2 Dilatação térmica",
        "slug": "dilatacao_termica",
        "weight": 0.0041841004184100415,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "8.2.2 Dilatação dos líquidos",
        "slug": "dilatacao_dos_liquidos",
        "weight": 0.0041841004184100415,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "8.3 Calorimetria",
        "slug": "calorimetria",
        "weight": 0.11297071129707113,
        "activityCount": 27,
        "recurrence": "really-high"
      },
      {
        "name": "8.3.1 Calor sensível",
        "slug": "calor_sensivel",
        "weight": 0.008368200836820083,
        "activityCount": 2,
        "recurrence": "low"
      },
      {
        "name": "8.3.2 Calor latente",
        "slug": "calor_latente",
        "weight": 0.0041841004184100415,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "8.4 Mudanças de fase",
        "slug": "mudancas_de_fase",
        "weight": 0.012552301255230125,
        "activityCount": 3,
        "recurrence": "medium"
      },
      {
        "name": "8.4.1 Quantidade de calor latente",
        "slug": "quantidade_de_calor_latente",
        "weight": 0.0041841004184100415,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "8.4.2 Diagramas de fases",
        "slug": "diagramas_de_fases",
        "weight": 0.0041841004184100415,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "8.5 Propagação do calor",
        "slug": "propagacao_do_calor",
        "weight": 0.012552301255230125,
        "activityCount": 3,
        "recurrence": "medium"
      },
      {
        "name": "8.5.1 Fluxo de calor",
        "slug": "fluxo_de_calor",
        "weight": 0.008368200836820083,
        "activityCount": 2,
        "recurrence": "low"
      },
      {
        "name": "8.5.2 Condução térmica",
        "slug": "conducao_termica",
        "weight": 0.0041841004184100415,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "8.5.3 Convecção térmica",
        "slug": "conveccao_termica",
        "weight": 0.0041841004184100415,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "8.5.4 Irradiação térmica",
        "slug": "irradiacao_termica",
        "weight": 0.0041841004184100415,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "8.6 Gases",
        "slug": "gases",
        "weight": 0.02092050209205021,
        "activityCount": 5,
        "recurrence": "high"
      },
      {
        "name": "8.6.1 Transformações gasosas",
        "slug": "transformacoes_gasosas",
        "weight": 0.008368200836820083,
        "activityCount": 2,
        "recurrence": "low"
      },
      {
        "name": "8.7 Termodinâmica",
        "slug": "termodinamica",
        "weight": 0.03765690376569038,
        "activityCount": 9,
        "recurrence": "really-high"
      },
      {
        "name": "8.7.2 Calor e trabalho",
        "slug": "calor_e_trabalho",
        "weight": 0.0041841004184100415,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "8.7.4 1ª Lei da Termodinâmica",
        "slug": "1a_lei_da_termodinamica",
        "weight": 0.0041841004184100415,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "8.7.5 Transformações termodinâmicas",
        "slug": "transformacoes_termodinamicas",
        "weight": 0.0041841004184100415,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "8.7.6 2ª Lei da Termodinâmica",
        "slug": "2a_lei_da_termodinamica",
        "weight": 0.0041841004184100415,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "8.7.7 Máquinas térmicas",
        "slug": "maquinas_termicas",
        "weight": 0.0041841004184100415,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "9 Óptica geométrica",
        "slug": "optica_geometrica",
        "weight": 0.0794979079497908,
        "activityCount": 19,
        "recurrence": "really-high"
      },
      {
        "name": "9.1 Princípios da Óptica Geométrica",
        "slug": "principios_da_optica_geometrica",
        "weight": 0.0041841004184100415,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "9.3 Espelhos esféricos",
        "slug": "espelhos_esfericos",
        "weight": 0.0041841004184100415,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "9.4 Refração da luz",
        "slug": "refracao_da_luz",
        "weight": 0.02510460251046025,
        "activityCount": 6,
        "recurrence": "high"
      },
      {
        "name": "9.4.1 Índice de refração",
        "slug": "indice_de_refracao",
        "weight": 0.0041841004184100415,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "9.4.3 Dioptro plano",
        "slug": "dioptro_plano",
        "weight": 0.0041841004184100415,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "9.4.4 Prisma",
        "slug": "prisma",
        "weight": 0.0041841004184100415,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "9.5 Lentes esféricas",
        "slug": "lentes_esfericas",
        "weight": 0.02092050209205021,
        "activityCount": 5,
        "recurrence": "high"
      },
      {
        "name": "9.6 Óptica da visão",
        "slug": "optica_da_visao",
        "weight": 0.02092050209205021,
        "activityCount": 5,
        "recurrence": "high"
      },
      {
        "name": "10 Ondulatória",
        "slug": "ondulatoria",
        "weight": 0.17573221757322174,
        "activityCount": 42,
        "recurrence": "really-high"
      },
      {
        "name": "10.1 Movimento harmônico simples (MHS)",
        "slug": "movimento_harmonico_simples_mhs",
        "weight": 0.0041841004184100415,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "10.2 Ondas",
        "slug": "ondas",
        "weight": 0.02092050209205021,
        "activityCount": 5,
        "recurrence": "high"
      },
      {
        "name": "10.3 Fenômenos ondulatórios",
        "slug": "fenomenos_ondulatorios",
        "weight": 0.06276150627615062,
        "activityCount": 15,
        "recurrence": "really-high"
      },
      {
        "name": "10.3.1 Reflexão de ondas",
        "slug": "reflexao_de_ondas",
        "weight": 0.012552301255230125,
        "activityCount": 3,
        "recurrence": "medium"
      },
      {
        "name": "10.3.2 Refração de ondas",
        "slug": "refracao_de_ondas",
        "weight": 0.0041841004184100415,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "10.3.3 Difração de ondas",
        "slug": "difracao_de_ondas",
        "weight": 0.0041841004184100415,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "10.3.5 Ressonância",
        "slug": "ressonancia",
        "weight": 0.0041841004184100415,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "10.3.6 Interferência de ondas",
        "slug": "interferencia_de_ondas",
        "weight": 0.012552301255230125,
        "activityCount": 3,
        "recurrence": "medium"
      },
      {
        "name": "10.4 Acústica",
        "slug": "acustica",
        "weight": 0.04602510460251046,
        "activityCount": 11,
        "recurrence": "really-high"
      },
      {
        "name": "10.4.1 Ondas sonoras",
        "slug": "ondas_sonoras",
        "weight": 0.0041841004184100415,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "10.4.2 Qualidades do som",
        "slug": "qualidades_do_som",
        "weight": 0.029288702928870293,
        "activityCount": 7,
        "recurrence": "really-high"
      },
      {
        "name": "10.4.4 Tubos sonoros",
        "slug": "tubos_sonoros",
        "weight": 0.0041841004184100415,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "10.4.5 Efeito Doppler",
        "slug": "efeito_doppler",
        "weight": 0.0041841004184100415,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "11 Eletrostática",
        "slug": "eletrostatica",
        "weight": 0.04184100418410042,
        "activityCount": 10,
        "recurrence": "really-high"
      },
      {
        "name": "11.1 Eletrização",
        "slug": "eletrizacao",
        "weight": 0.008368200836820083,
        "activityCount": 2,
        "recurrence": "low"
      },
      {
        "name": "11.3 Campo elétrico",
        "slug": "campo_eletrico",
        "weight": 0.008368200836820083,
        "activityCount": 2,
        "recurrence": "low"
      },
      {
        "name": "11.4 Trabalho e potencial elétrico",
        "slug": "trabalho_e_potencial_eletrico",
        "weight": 0.02510460251046025,
        "activityCount": 6,
        "recurrence": "high"
      },
      {
        "name": "12 Eletrodinâmica",
        "slug": "eletrodinamica",
        "weight": 0.18828451882845187,
        "activityCount": 45,
        "recurrence": "really-high"
      },
      {
        "name": "12.1 Corrente elétrica",
        "slug": "corrente_eletrica",
        "weight": 0.02510460251046025,
        "activityCount": 6,
        "recurrence": "high"
      },
      {
        "name": "12.2 Resistores",
        "slug": "resistores",
        "weight": 0.07531380753138076,
        "activityCount": 18,
        "recurrence": "really-high"
      },
      {
        "name": "12.2.2 Lei de Ohm",
        "slug": "lei_de_ohm",
        "weight": 0.012552301255230125,
        "activityCount": 3,
        "recurrence": "medium"
      },
      {
        "name": "12.2.3 Resistividade",
        "slug": "resistividade",
        "weight": 0.0041841004184100415,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "12.2.4 Associação de resistores",
        "slug": "associacao_de_resistores",
        "weight": 0.016736401673640166,
        "activityCount": 4,
        "recurrence": "high"
      },
      {
        "name": "12.2.5 Curto-circuito",
        "slug": "curtocircuito",
        "weight": 0.008368200836820083,
        "activityCount": 2,
        "recurrence": "low"
      },
      {
        "name": "12.4 Geradores elétricos",
        "slug": "geradores_eletricos",
        "weight": 0.012552301255230125,
        "activityCount": 3,
        "recurrence": "medium"
      },
      {
        "name": "13 Eletromagnetismo",
        "slug": "eletromagnetismo",
        "weight": 0.058577405857740586,
        "activityCount": 14,
        "recurrence": "really-high"
      },
      {
        "name": "13.1 Campos magnéticos",
        "slug": "campos_magneticos",
        "weight": 0.02092050209205021,
        "activityCount": 5,
        "recurrence": "high"
      },
      {
        "name": "13.2 Força magnética",
        "slug": "forca_magnetica",
        "weight": 0.012552301255230125,
        "activityCount": 3,
        "recurrence": "medium"
      },
      {
        "name": "13.3 Indução eletromagnética",
        "slug": "inducao_eletromagnetica",
        "weight": 0.012552301255230125,
        "activityCount": 3,
        "recurrence": "medium"
      },
      {
        "name": "14 Física moderna",
        "slug": "fisica_moderna",
        "weight": 0.02510460251046025,
        "activityCount": 6,
        "recurrence": "high"
      },
      {
        "name": "14.1 Ondas eletromagnéticas",
        "slug": "ondas_eletromagneticas",
        "weight": 0.02092050209205021,
        "activityCount": 5,
        "recurrence": "high"
      },
      {
        "name": "14.4 Efeito fotoelétrico",
        "slug": "efeito_fotoeletrico",
        "weight": 0.0041841004184100415,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "15 Análise dimensional",
        "slug": "analise_dimensional",
        "weight": 0.008368200836820083,
        "activityCount": 2,
        "recurrence": "low"
      }
    ]
  },
  "portugues": {
    "weight": 0.17097288676236044,
    "activityCount": 536,
    "recurrence": "really-high",
    "topics": [
      {
        "name": "2 Morfologia",
        "slug": "morfologia",
        "weight": 0.048507462686567165,
        "activityCount": 26,
        "recurrence": "high"
      },
      {
        "name": "2.3 Relações morfossintáticas",
        "slug": "relacoes_morfossintaticas",
        "weight": 0.007462686567164179,
        "activityCount": 4,
        "recurrence": "medium"
      },
      {
        "name": "2.4 Substantivo",
        "slug": "substantivo",
        "weight": 0.0018656716417910447,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "2.5 Adjetivo",
        "slug": "adjetivo",
        "weight": 0.0037313432835820895,
        "activityCount": 2,
        "recurrence": "low"
      },
      {
        "name": "2.6 Pronome",
        "slug": "pronome",
        "weight": 0.013059701492537313,
        "activityCount": 7,
        "recurrence": "medium"
      },
      {
        "name": "2.10 Verbo",
        "slug": "verbo",
        "weight": 0.013059701492537313,
        "activityCount": 7,
        "recurrence": "medium"
      },
      {
        "name": "2.11 Advérbio",
        "slug": "adverbio",
        "weight": 0.0018656716417910447,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "2.12 Preposição",
        "slug": "preposicao",
        "weight": 0.0018656716417910447,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "2.13 Conjunção",
        "slug": "conjuncao",
        "weight": 0.009328358208955223,
        "activityCount": 5,
        "recurrence": "medium"
      },
      {
        "name": "3 Sintaxe",
        "slug": "sintaxe",
        "weight": 0.011194029850746268,
        "activityCount": 6,
        "recurrence": "medium"
      },
      {
        "name": "3.7 Período composto por subordinação",
        "slug": "periodo_composto_por_subordinacao",
        "weight": 0.0018656716417910447,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "3.8 Concordância nominal e verbal",
        "slug": "concordancia_nominal_e_verbal",
        "weight": 0.0018656716417910447,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "3.9 Regência nominal e verbal",
        "slug": "regencia_nominal_e_verbal",
        "weight": 0.0018656716417910447,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "4 Pontuação",
        "slug": "pontuacao",
        "weight": 0.007462686567164179,
        "activityCount": 4,
        "recurrence": "medium"
      },
      {
        "name": "4.6 Dois-pontos",
        "slug": "doispontos",
        "weight": 0.0018656716417910447,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "6 Interpretação de textos",
        "slug": "interpretacao_de_textos",
        "weight": 0.9738805970149254,
        "activityCount": 522,
        "recurrence": "really-high"
      },
      {
        "name": "6.1 Figuras de linguagem",
        "slug": "figuras_de_linguagem",
        "weight": 0.03731343283582089,
        "activityCount": 20,
        "recurrence": "high"
      },
      {
        "name": "6.2 Tipologia textual",
        "slug": "tipologia_textual",
        "weight": 0.014925373134328358,
        "activityCount": 8,
        "recurrence": "high"
      },
      {
        "name": "6.3 Gêneros textuais",
        "slug": "generos_textuais",
        "weight": 0.4906716417910448,
        "activityCount": 263,
        "recurrence": "really-high"
      },
      {
        "name": "6.4 Tipos de discurso",
        "slug": "tipos_de_discurso",
        "weight": 0.0037313432835820895,
        "activityCount": 2,
        "recurrence": "low"
      },
      {
        "name": "6.5 Funções da linguagem",
        "slug": "funcoes_da_linguagem",
        "weight": 0.13246268656716417,
        "activityCount": 71,
        "recurrence": "really-high"
      },
      {
        "name": "6.6 Coesão e coerência",
        "slug": "coesao_e_coerencia",
        "weight": 0.11194029850746269,
        "activityCount": 60,
        "recurrence": "really-high"
      },
      {
        "name": "6.7 Variação linguística",
        "slug": "variacao_linguistica",
        "weight": 0.11753731343283583,
        "activityCount": 63,
        "recurrence": "really-high"
      },
      {
        "name": "6.8 Intertextualidade",
        "slug": "intertextualidade",
        "weight": 0.05970149253731343,
        "activityCount": 32,
        "recurrence": "high"
      },
      {
        "name": "6.9 Efeitos de sentido",
        "slug": "efeitos_de_sentido",
        "weight": 0.005597014925373134,
        "activityCount": 3,
        "recurrence": "low"
      }
    ]
  },
  "ingles": {
    "weight": 0.025518341307814992,
    "activityCount": 80,
    "recurrence": "low",
    "topics": [
      {
        "name": "1 Grammar",
        "slug": "grammar",
        "weight": 0.0375,
        "activityCount": 3,
        "recurrence": "medium"
      },
      {
        "name": "1.5 Articles",
        "slug": "articles",
        "weight": 0.0125,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "1.11 Verbs",
        "slug": "verbs",
        "weight": 0.0125,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "1.11.4 Phrasal verbs",
        "slug": "phrasal_verbs",
        "weight": 0.0125,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "2 Vocabulary",
        "slug": "vocabulary",
        "weight": 0.1125,
        "activityCount": 9,
        "recurrence": "high"
      },
      {
        "name": "5 Reading comprehension",
        "slug": "reading_comprehension",
        "weight": 0.975,
        "activityCount": 78,
        "recurrence": "really-high"
      }
    ]
  },
  "espanhol": {
    "weight": 0.023923444976076555,
    "activityCount": 75,
    "recurrence": "really-low",
    "topics": [
      {
        "name": "1 Gramática",
        "slug": "gramatica",
        "weight": 0.04,
        "activityCount": 3,
        "recurrence": "really-low"
      },
      {
        "name": "2 Vocabulario",
        "slug": "vocabulario",
        "weight": 0.13333333333333333,
        "activityCount": 10,
        "recurrence": "medium"
      },
      {
        "name": "3 Comprensión lectora",
        "slug": "comprension_lectora",
        "weight": 0.9733333333333334,
        "activityCount": 73,
        "recurrence": "really-high"
      }
    ]
  },
  "literatura": {
    "weight": 0.022966507177033493,
    "activityCount": 72,
    "recurrence": "really-low",
    "topics": [
      {
        "name": "1 Gêneros literários",
        "slug": "generos_literarios",
        "weight": 0.2222222222222222,
        "activityCount": 16,
        "recurrence": "really-high"
      },
      {
        "name": "3 Teoria literária",
        "slug": "teoria_literaria",
        "weight": 0.7361111111111112,
        "activityCount": 53,
        "recurrence": "really-high"
      },
      {
        "name": "6 Classicismo",
        "slug": "classicismo",
        "weight": 0.013888888888888888,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "7 Quinhentismo",
        "slug": "quinhentismo",
        "weight": 0.013888888888888888,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "8 Barroco",
        "slug": "barroco",
        "weight": 0.013888888888888888,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "9 Arcadismo",
        "slug": "arcadismo",
        "weight": 0.027777777777777776,
        "activityCount": 2,
        "recurrence": "low"
      },
      {
        "name": "10 Romantismo",
        "slug": "romantismo",
        "weight": 0.1111111111111111,
        "activityCount": 8,
        "recurrence": "high"
      },
      {
        "name": "11 Realismo",
        "slug": "realismo",
        "weight": 0.09722222222222222,
        "activityCount": 7,
        "recurrence": "high"
      },
      {
        "name": "12 Naturalismo",
        "slug": "naturalismo",
        "weight": 0.041666666666666664,
        "activityCount": 3,
        "recurrence": "low"
      },
      {
        "name": "13 Parnasianismo",
        "slug": "parnasianismo",
        "weight": 0.041666666666666664,
        "activityCount": 3,
        "recurrence": "low"
      },
      {
        "name": "14 Simbolismo",
        "slug": "simbolismo",
        "weight": 0.041666666666666664,
        "activityCount": 3,
        "recurrence": "low"
      },
      {
        "name": "15 Pré-modernismo",
        "slug": "premodernismo",
        "weight": 0.05555555555555555,
        "activityCount": 4,
        "recurrence": "high"
      },
      {
        "name": "16 Modernismo",
        "slug": "modernismo",
        "weight": 0.3472222222222222,
        "activityCount": 25,
        "recurrence": "really-high"
      },
      {
        "name": "17 Pós-modernismo",
        "slug": "posmodernismo",
        "weight": 0.013888888888888888,
        "activityCount": 1,
        "recurrence": "really-low"
      }
    ]
  },
  "historia": {
    "weight": 0.07751196172248803,
    "activityCount": 243,
    "recurrence": "high",
    "topics": [
      {
        "name": "1 Historiografia",
        "slug": "historiografia",
        "weight": 0.0411522633744856,
        "activityCount": 10,
        "recurrence": "high"
      },
      {
        "name": "3 Antiguidade Oriental",
        "slug": "antiguidade_oriental",
        "weight": 0.00823045267489712,
        "activityCount": 2,
        "recurrence": "really-low"
      },
      {
        "name": "3.1 Mesopotâmia",
        "slug": "mesopotamia",
        "weight": 0.00411522633744856,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "3.2 Civilização egípcia",
        "slug": "civilizacao_egipcia",
        "weight": 0.00411522633744856,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "4 Antiguidade Clássica",
        "slug": "antiguidade_classica",
        "weight": 0.0411522633744856,
        "activityCount": 10,
        "recurrence": "high"
      },
      {
        "name": "4.1 Grécia Antiga",
        "slug": "grecia_antiga",
        "weight": 0.024691358024691357,
        "activityCount": 6,
        "recurrence": "high"
      },
      {
        "name": "4.2 Roma Antiga",
        "slug": "roma_antiga",
        "weight": 0.0205761316872428,
        "activityCount": 5,
        "recurrence": "medium"
      },
      {
        "name": "5 Idade Média",
        "slug": "idade_media",
        "weight": 0.06995884773662552,
        "activityCount": 17,
        "recurrence": "really-high"
      },
      {
        "name": "5.1 Europa feudal",
        "slug": "europa_feudal",
        "weight": 0.024691358024691357,
        "activityCount": 6,
        "recurrence": "high"
      },
      {
        "name": "5.2 Civilização islâmica",
        "slug": "civilizacao_islamica",
        "weight": 0.00411522633744856,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "6 Idade Moderna",
        "slug": "idade_moderna",
        "weight": 0.13991769547325103,
        "activityCount": 34,
        "recurrence": "really-high"
      },
      {
        "name": "6.1 Renascimento",
        "slug": "renascimento",
        "weight": 0.01646090534979424,
        "activityCount": 4,
        "recurrence": "low"
      },
      {
        "name": "6.2 Expansão marítima",
        "slug": "expansao_maritima",
        "weight": 0.01646090534979424,
        "activityCount": 4,
        "recurrence": "low"
      },
      {
        "name": "6.3 Reforma Protestante",
        "slug": "reforma_protestante",
        "weight": 0.01646090534979424,
        "activityCount": 4,
        "recurrence": "low"
      },
      {
        "name": "6.4 Absolutismo",
        "slug": "absolutismo",
        "weight": 0.024691358024691357,
        "activityCount": 6,
        "recurrence": "high"
      },
      {
        "name": "6.6 Iluminismo",
        "slug": "iluminismo",
        "weight": 0.0205761316872428,
        "activityCount": 5,
        "recurrence": "medium"
      },
      {
        "name": "6.8 Revolução Industrial",
        "slug": "revolucao_industrial",
        "weight": 0.037037037037037035,
        "activityCount": 9,
        "recurrence": "high"
      },
      {
        "name": "6.10 Revolução Francesa",
        "slug": "revolucao_francesa",
        "weight": 0.00411522633744856,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "7 Idade Contemporânea",
        "slug": "idade_contemporanea",
        "weight": 0.1522633744855967,
        "activityCount": 37,
        "recurrence": "really-high"
      },
      {
        "name": "7.1 Século XIX",
        "slug": "seculo_xix",
        "weight": 0.0205761316872428,
        "activityCount": 5,
        "recurrence": "medium"
      },
      {
        "name": "7.1.1 Império Napoleônico",
        "slug": "imperio_napoleonico",
        "weight": 0.00411522633744856,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "7.1.3 Revoluções liberais",
        "slug": "revolucoes_liberais",
        "weight": 0.00823045267489712,
        "activityCount": 2,
        "recurrence": "really-low"
      },
      {
        "name": "7.1.4 Imperialismo",
        "slug": "imperialismo",
        "weight": 0.00823045267489712,
        "activityCount": 2,
        "recurrence": "really-low"
      },
      {
        "name": "7.2 Primeira Guerra Mundial",
        "slug": "primeira_guerra_mundial",
        "weight": 0.01646090534979424,
        "activityCount": 4,
        "recurrence": "low"
      },
      {
        "name": "7.4 Crise de 1929",
        "slug": "crise_de_1929",
        "weight": 0.00823045267489712,
        "activityCount": 2,
        "recurrence": "really-low"
      },
      {
        "name": "7.5 Totalitarismo",
        "slug": "totalitarismo",
        "weight": 0.024691358024691357,
        "activityCount": 6,
        "recurrence": "high"
      },
      {
        "name": "7.6 Segunda Guerra Mundial",
        "slug": "segunda_guerra_mundial",
        "weight": 0.0205761316872428,
        "activityCount": 5,
        "recurrence": "medium"
      },
      {
        "name": "7.7 Descolonização da África e Ásia",
        "slug": "descolonizacao_da_africa_e_asia",
        "weight": 0.00823045267489712,
        "activityCount": 2,
        "recurrence": "really-low"
      },
      {
        "name": "7.8 Guerra Fria",
        "slug": "guerra_fria",
        "weight": 0.01646090534979424,
        "activityCount": 4,
        "recurrence": "low"
      },
      {
        "name": "7.9 Revolução Chinesa",
        "slug": "revolucao_chinesa",
        "weight": 0.00411522633744856,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "8 História do Brasil",
        "slug": "historia_do_brasil",
        "weight": 0.5802469135802469,
        "activityCount": 141,
        "recurrence": "really-high"
      },
      {
        "name": "8.2 Brasil pré-colonial",
        "slug": "brasil_precolonial",
        "weight": 0.012345679012345678,
        "activityCount": 3,
        "recurrence": "low"
      },
      {
        "name": "8.3 Brasil colonial",
        "slug": "brasil_colonial",
        "weight": 0.16049382716049382,
        "activityCount": 39,
        "recurrence": "really-high"
      },
      {
        "name": "8.3.1 Administração colonial",
        "slug": "administracao_colonial",
        "weight": 0.00411522633744856,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "8.3.2 Economia colonial",
        "slug": "economia_colonial",
        "weight": 0.0205761316872428,
        "activityCount": 5,
        "recurrence": "medium"
      },
      {
        "name": "8.3.3 Escravidão",
        "slug": "escravidao",
        "weight": 0.04526748971193416,
        "activityCount": 11,
        "recurrence": "high"
      },
      {
        "name": "8.3.5 Crise do sistema colonial",
        "slug": "crise_do_sistema_colonial",
        "weight": 0.00411522633744856,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "8.3.6 Independência do Brasil",
        "slug": "independencia_do_brasil",
        "weight": 0.00823045267489712,
        "activityCount": 2,
        "recurrence": "really-low"
      },
      {
        "name": "8.4 Primeiro Reinado",
        "slug": "primeiro_reinado",
        "weight": 0.01646090534979424,
        "activityCount": 4,
        "recurrence": "low"
      },
      {
        "name": "8.5 Período Regencial",
        "slug": "periodo_regencial",
        "weight": 0.01646090534979424,
        "activityCount": 4,
        "recurrence": "low"
      },
      {
        "name": "8.6 Segundo Reinado",
        "slug": "segundo_reinado",
        "weight": 0.06584362139917696,
        "activityCount": 16,
        "recurrence": "really-high"
      },
      {
        "name": "8.7 Primeira República (1889-1930)",
        "slug": "primeira_republica_18891930",
        "weight": 0.13168724279835392,
        "activityCount": 32,
        "recurrence": "really-high"
      },
      {
        "name": "8.8 Era Vargas",
        "slug": "era_vargas",
        "weight": 0.09876543209876543,
        "activityCount": 24,
        "recurrence": "really-high"
      },
      {
        "name": "8.9 Quarta República (1946-1964)",
        "slug": "quarta_republica_19461964",
        "weight": 0.037037037037037035,
        "activityCount": 9,
        "recurrence": "high"
      },
      {
        "name": "8.10 Ditadura Militar",
        "slug": "ditadura_militar",
        "weight": 0.05761316872427984,
        "activityCount": 14,
        "recurrence": "really-high"
      },
      {
        "name": "8.11 Nova República",
        "slug": "nova_republica",
        "weight": 0.0205761316872428,
        "activityCount": 5,
        "recurrence": "medium"
      },
      {
        "name": "9 História da América Latina",
        "slug": "historia_da_america_latina",
        "weight": 0.04938271604938271,
        "activityCount": 12,
        "recurrence": "really-high"
      },
      {
        "name": "9.1 Povos pré-colombianos",
        "slug": "povos_precolombianos",
        "weight": 0.0205761316872428,
        "activityCount": 5,
        "recurrence": "medium"
      },
      {
        "name": "9.2 Colonização espanhola",
        "slug": "colonizacao_espanhola",
        "weight": 0.00823045267489712,
        "activityCount": 2,
        "recurrence": "really-low"
      },
      {
        "name": "9.7 Ditaduras na América Latina",
        "slug": "ditaduras_na_america_latina",
        "weight": 0.00823045267489712,
        "activityCount": 2,
        "recurrence": "really-low"
      }
    ]
  },
  "filosofia": {
    "weight": 0.02966507177033493,
    "activityCount": 93,
    "recurrence": "low",
    "topics": [
      {
        "name": "1 Filosofia Antiga",
        "slug": "filosofia_antiga",
        "weight": 0.24731182795698925,
        "activityCount": 23,
        "recurrence": "really-high"
      },
      {
        "name": "1.1 Mitos",
        "slug": "mitos",
        "weight": 0.010752688172043012,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "1.2 Pré-socráticos",
        "slug": "presocraticos",
        "weight": 0.053763440860215055,
        "activityCount": 5,
        "recurrence": "medium"
      },
      {
        "name": "1.3 Sócrates",
        "slug": "socrates",
        "weight": 0.043010752688172046,
        "activityCount": 4,
        "recurrence": "low"
      },
      {
        "name": "1.4 Platão",
        "slug": "platao",
        "weight": 0.043010752688172046,
        "activityCount": 4,
        "recurrence": "low"
      },
      {
        "name": "1.5 Aristóteles",
        "slug": "aristoteles",
        "weight": 0.07526881720430108,
        "activityCount": 7,
        "recurrence": "high"
      },
      {
        "name": "1.6 Epicurismo",
        "slug": "epicurismo",
        "weight": 0.021505376344086023,
        "activityCount": 2,
        "recurrence": "really-low"
      },
      {
        "name": "1.7 Estoicismo",
        "slug": "estoicismo",
        "weight": 0.010752688172043012,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "2 Filosofia Medieval",
        "slug": "filosofia_medieval",
        "weight": 0.06451612903225806,
        "activityCount": 6,
        "recurrence": "high"
      },
      {
        "name": "2.1 Patrística",
        "slug": "patristica",
        "weight": 0.021505376344086023,
        "activityCount": 2,
        "recurrence": "really-low"
      },
      {
        "name": "2.2 Escolástica",
        "slug": "escolastica",
        "weight": 0.021505376344086023,
        "activityCount": 2,
        "recurrence": "really-low"
      },
      {
        "name": "3 Filosofia do Renascimento",
        "slug": "filosofia_do_renascimento",
        "weight": 0.06451612903225806,
        "activityCount": 6,
        "recurrence": "high"
      },
      {
        "name": "3.2 Maquiavel",
        "slug": "maquiavel",
        "weight": 0.043010752688172046,
        "activityCount": 4,
        "recurrence": "low"
      },
      {
        "name": "4 Filosofia Moderna",
        "slug": "filosofia_moderna",
        "weight": 0.46236559139784944,
        "activityCount": 43,
        "recurrence": "really-high"
      },
      {
        "name": "4.1 Racionalismo",
        "slug": "racionalismo",
        "weight": 0.11827956989247312,
        "activityCount": 11,
        "recurrence": "really-high"
      },
      {
        "name": "4.2 Empirismo",
        "slug": "empirismo",
        "weight": 0.08602150537634409,
        "activityCount": 8,
        "recurrence": "high"
      },
      {
        "name": "4.3 Criticismo",
        "slug": "criticismo",
        "weight": 0.010752688172043012,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "4.5 Ética deontológica",
        "slug": "etica_deontologica",
        "weight": 0.10752688172043011,
        "activityCount": 10,
        "recurrence": "really-high"
      },
      {
        "name": "4.6 Contratualismo",
        "slug": "contratualismo",
        "weight": 0.053763440860215055,
        "activityCount": 5,
        "recurrence": "medium"
      },
      {
        "name": "5 Filosofia Contemporânea",
        "slug": "filosofia_contemporanea",
        "weight": 0.21505376344086022,
        "activityCount": 20,
        "recurrence": "really-high"
      },
      {
        "name": "5.3 Schopenhauer",
        "slug": "schopenhauer",
        "weight": 0.010752688172043012,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "5.5 Nietzsche",
        "slug": "nietzsche",
        "weight": 0.021505376344086023,
        "activityCount": 2,
        "recurrence": "really-low"
      },
      {
        "name": "5.11 Escola de Frankfurt",
        "slug": "escola_de_frankfurt",
        "weight": 0.03225806451612903,
        "activityCount": 3,
        "recurrence": "low"
      },
      {
        "name": "5.12 Existencialismo",
        "slug": "existencialismo",
        "weight": 0.07526881720430108,
        "activityCount": 7,
        "recurrence": "high"
      },
      {
        "name": "5.13 Foucault",
        "slug": "foucault",
        "weight": 0.043010752688172046,
        "activityCount": 4,
        "recurrence": "low"
      }
    ]
  },
  "geografia": {
    "weight": 0.08963317384370016,
    "activityCount": 281,
    "recurrence": "high",
    "topics": [
      {
        "name": "1 Cartografia",
        "slug": "cartografia",
        "weight": 0.05338078291814947,
        "activityCount": 15,
        "recurrence": "really-high"
      },
      {
        "name": "1.1 Movimentos da Terra",
        "slug": "movimentos_da_terra",
        "weight": 0.0035587188612099642,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "1.2 Coordenadas geográficas",
        "slug": "coordenadas_geograficas",
        "weight": 0.0071174377224199285,
        "activityCount": 2,
        "recurrence": "really-low"
      },
      {
        "name": "1.4 Tipos de mapas",
        "slug": "tipos_de_mapas",
        "weight": 0.0035587188612099642,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "1.5 Projeções cartográficas",
        "slug": "projecoes_cartograficas",
        "weight": 0.0035587188612099642,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "2 Estrutura geológica",
        "slug": "estrutura_geologica",
        "weight": 0.05693950177935943,
        "activityCount": 16,
        "recurrence": "really-high"
      },
      {
        "name": "2.1 Tipos de rochas",
        "slug": "tipos_de_rochas",
        "weight": 0.0071174377224199285,
        "activityCount": 2,
        "recurrence": "really-low"
      },
      {
        "name": "2.3 Tectônica de placas",
        "slug": "tectonica_de_placas",
        "weight": 0.010676156583629894,
        "activityCount": 3,
        "recurrence": "low"
      },
      {
        "name": "3 Formas do relevo",
        "slug": "formas_do_relevo",
        "weight": 0.046263345195729534,
        "activityCount": 13,
        "recurrence": "high"
      },
      {
        "name": "3.1 Formação do relevo",
        "slug": "formacao_do_relevo",
        "weight": 0.010676156583629894,
        "activityCount": 3,
        "recurrence": "low"
      },
      {
        "name": "4 Solos",
        "slug": "solos",
        "weight": 0.05338078291814947,
        "activityCount": 15,
        "recurrence": "really-high"
      },
      {
        "name": "4.2 Tipos de solo",
        "slug": "tipos_de_solo",
        "weight": 0.0035587188612099642,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "4.5 Conservação dos solos",
        "slug": "conservacao_dos_solos",
        "weight": 0.0071174377224199285,
        "activityCount": 2,
        "recurrence": "really-low"
      },
      {
        "name": "6 Clima",
        "slug": "clima",
        "weight": 0.07473309608540925,
        "activityCount": 21,
        "recurrence": "really-high"
      },
      {
        "name": "6.1 Tempo e clima",
        "slug": "tempo_e_clima",
        "weight": 0.0035587188612099642,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "6.2 Fatores climáticos",
        "slug": "fatores_climaticos",
        "weight": 0.03558718861209965,
        "activityCount": 10,
        "recurrence": "high"
      },
      {
        "name": "6.3 Atributos do clima",
        "slug": "atributos_do_clima",
        "weight": 0.0071174377224199285,
        "activityCount": 2,
        "recurrence": "really-low"
      },
      {
        "name": "6.4 Tipos de clima",
        "slug": "tipos_de_clima",
        "weight": 0.014234875444839857,
        "activityCount": 4,
        "recurrence": "low"
      },
      {
        "name": "6.5 Climas no Brasil",
        "slug": "climas_no_brasil",
        "weight": 0.0071174377224199285,
        "activityCount": 2,
        "recurrence": "really-low"
      },
      {
        "name": "6.6 Interferência humana no clima",
        "slug": "interferencia_humana_no_clima",
        "weight": 0.0071174377224199285,
        "activityCount": 2,
        "recurrence": "really-low"
      },
      {
        "name": "7 Hidrografia",
        "slug": "hidrografia",
        "weight": 0.046263345195729534,
        "activityCount": 13,
        "recurrence": "high"
      },
      {
        "name": "7.2 Hidrografia do Brasil",
        "slug": "hidrografia_do_brasil",
        "weight": 0.014234875444839857,
        "activityCount": 4,
        "recurrence": "low"
      },
      {
        "name": "7.3 Hidrografia mundial",
        "slug": "hidrografia_mundial",
        "weight": 0.0035587188612099642,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "8 Biogeografia",
        "slug": "biogeografia",
        "weight": 0.046263345195729534,
        "activityCount": 13,
        "recurrence": "high"
      },
      {
        "name": "8.1 Tipos de vegetação",
        "slug": "tipos_de_vegetacao",
        "weight": 0.014234875444839857,
        "activityCount": 4,
        "recurrence": "low"
      },
      {
        "name": "8.2 Biomas terrestres",
        "slug": "biomas_terrestres",
        "weight": 0.02491103202846975,
        "activityCount": 7,
        "recurrence": "medium"
      },
      {
        "name": "8.3 Vegetação brasileira",
        "slug": "vegetacao_brasileira",
        "weight": 0.017793594306049824,
        "activityCount": 5,
        "recurrence": "medium"
      },
      {
        "name": "9 Preservação ambiental",
        "slug": "preservacao_ambiental",
        "weight": 0.20640569395017794,
        "activityCount": 58,
        "recurrence": "really-high"
      },
      {
        "name": "9.1 Questão ambiental",
        "slug": "questao_ambiental",
        "weight": 0.07473309608540925,
        "activityCount": 21,
        "recurrence": "really-high"
      },
      {
        "name": "9.2 Problemas socioambientais",
        "slug": "problemas_socioambientais",
        "weight": 0.0498220640569395,
        "activityCount": 14,
        "recurrence": "really-high"
      },
      {
        "name": "9.3 Mudanças climáticas",
        "slug": "mudancas_climaticas",
        "weight": 0.014234875444839857,
        "activityCount": 4,
        "recurrence": "low"
      },
      {
        "name": "9.4 Meio ambiente e agropecuária",
        "slug": "meio_ambiente_e_agropecuaria",
        "weight": 0.046263345195729534,
        "activityCount": 13,
        "recurrence": "high"
      },
      {
        "name": "9.5 Geopolítica ambiental",
        "slug": "geopolitica_ambiental",
        "weight": 0.03202846975088968,
        "activityCount": 9,
        "recurrence": "high"
      },
      {
        "name": "9.6 Conferências ambientais",
        "slug": "conferencias_ambientais",
        "weight": 0.0071174377224199285,
        "activityCount": 2,
        "recurrence": "really-low"
      },
      {
        "name": "10 Globalização",
        "slug": "globalizacao",
        "weight": 0.20284697508896798,
        "activityCount": 57,
        "recurrence": "really-high"
      },
      {
        "name": "10.1 Desenvolvimento do capitalismo",
        "slug": "desenvolvimento_do_capitalismo",
        "weight": 0.021352313167259787,
        "activityCount": 6,
        "recurrence": "medium"
      },
      {
        "name": "10.2 Avanços da globalização",
        "slug": "avancos_da_globalizacao",
        "weight": 0.03558718861209965,
        "activityCount": 10,
        "recurrence": "high"
      },
      {
        "name": "10.5 Críticas à globalização",
        "slug": "criticas_a_globalizacao",
        "weight": 0.021352313167259787,
        "activityCount": 6,
        "recurrence": "medium"
      },
      {
        "name": "11 Geopolítica",
        "slug": "geopolitica",
        "weight": 0.17437722419928825,
        "activityCount": 49,
        "recurrence": "really-high"
      },
      {
        "name": "11.1 Ordem geopolítica",
        "slug": "ordem_geopolitica",
        "weight": 0.03202846975088968,
        "activityCount": 9,
        "recurrence": "high"
      },
      {
        "name": "11.2 Ordem econômica",
        "slug": "ordem_economica",
        "weight": 0.03202846975088968,
        "activityCount": 9,
        "recurrence": "high"
      },
      {
        "name": "11.3 Colonialismo",
        "slug": "colonialismo",
        "weight": 0.0035587188612099642,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "11.6 Blocos de influência",
        "slug": "blocos_de_influencia",
        "weight": 0.03558718861209965,
        "activityCount": 10,
        "recurrence": "high"
      },
      {
        "name": "12 Conflitos armados",
        "slug": "conflitos_armados",
        "weight": 0.0035587188612099642,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "13 Indústria",
        "slug": "industria",
        "weight": 0.0498220640569395,
        "activityCount": 14,
        "recurrence": "really-high"
      },
      {
        "name": "13.4 Modelos industriais",
        "slug": "modelos_industriais",
        "weight": 0.021352313167259787,
        "activityCount": 6,
        "recurrence": "medium"
      },
      {
        "name": "13.5 Indústria no Brasil",
        "slug": "industria_no_brasil",
        "weight": 0.010676156583629894,
        "activityCount": 3,
        "recurrence": "low"
      },
      {
        "name": "13.6 Indústria no mundo",
        "slug": "industria_no_mundo",
        "weight": 0.0035587188612099642,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "14 Energia",
        "slug": "energia",
        "weight": 0.028469750889679714,
        "activityCount": 8,
        "recurrence": "medium"
      },
      {
        "name": "14.1 Tipos de energia",
        "slug": "tipos_de_energia",
        "weight": 0.014234875444839857,
        "activityCount": 4,
        "recurrence": "low"
      },
      {
        "name": "14.1.2 Energia renovável",
        "slug": "energia_renovavel",
        "weight": 0.0035587188612099642,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "14.2 Matriz energética",
        "slug": "matriz_energetica",
        "weight": 0.014234875444839857,
        "activityCount": 4,
        "recurrence": "low"
      },
      {
        "name": "14.2.1 Perfil energético brasileiro",
        "slug": "perfil_energetico_brasileiro",
        "weight": 0.0035587188612099642,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "14.2.2 Perfil energético do mundo",
        "slug": "perfil_energetico_do_mundo",
        "weight": 0.0071174377224199285,
        "activityCount": 2,
        "recurrence": "really-low"
      },
      {
        "name": "15 Redes de transportes",
        "slug": "redes_de_transportes",
        "weight": 0.03914590747330961,
        "activityCount": 11,
        "recurrence": "high"
      },
      {
        "name": "15.1 Redes de transportes no Brasil",
        "slug": "redes_de_transportes_no_brasil",
        "weight": 0.021352313167259787,
        "activityCount": 6,
        "recurrence": "medium"
      },
      {
        "name": "15.2 Redes de transportes no mundo",
        "slug": "redes_de_transportes_no_mundo",
        "weight": 0.0035587188612099642,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "16 Demografia",
        "slug": "demografia",
        "weight": 0.13167259786476868,
        "activityCount": 37,
        "recurrence": "really-high"
      },
      {
        "name": "16.1 Tendências demográficas",
        "slug": "tendencias_demograficas",
        "weight": 0.014234875444839857,
        "activityCount": 4,
        "recurrence": "low"
      },
      {
        "name": "16.2 Dinâmica populacional",
        "slug": "dinamica_populacional",
        "weight": 0.06761565836298933,
        "activityCount": 19,
        "recurrence": "really-high"
      },
      {
        "name": "16.4 Migração",
        "slug": "migracao",
        "weight": 0.060498220640569395,
        "activityCount": 17,
        "recurrence": "really-high"
      },
      {
        "name": "16.5 Demografia brasileira",
        "slug": "demografia_brasileira",
        "weight": 0.0071174377224199285,
        "activityCount": 2,
        "recurrence": "really-low"
      },
      {
        "name": "17 Urbanização",
        "slug": "urbanizacao",
        "weight": 0.12811387900355872,
        "activityCount": 36,
        "recurrence": "really-high"
      },
      {
        "name": "17.1 Processo de urbanização",
        "slug": "processo_de_urbanizacao",
        "weight": 0.014234875444839857,
        "activityCount": 4,
        "recurrence": "low"
      },
      {
        "name": "17.2 Rede e hierarquia urbanas",
        "slug": "rede_e_hierarquia_urbanas",
        "weight": 0.0035587188612099642,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "17.3 Urbanização no Brasil",
        "slug": "urbanizacao_no_brasil",
        "weight": 0.042704626334519574,
        "activityCount": 12,
        "recurrence": "high"
      },
      {
        "name": "17.4 Urbanização no mundo",
        "slug": "urbanizacao_no_mundo",
        "weight": 0.0071174377224199285,
        "activityCount": 2,
        "recurrence": "really-low"
      },
      {
        "name": "17.5 Problemas urbanos",
        "slug": "problemas_urbanos",
        "weight": 0.017793594306049824,
        "activityCount": 5,
        "recurrence": "medium"
      },
      {
        "name": "18 Regionalização do Brasil",
        "slug": "regionalizacao_do_brasil",
        "weight": 0.028469750889679714,
        "activityCount": 8,
        "recurrence": "medium"
      },
      {
        "name": "18.2 Regiões brasileiras",
        "slug": "regioes_brasileiras",
        "weight": 0.028469750889679714,
        "activityCount": 8,
        "recurrence": "medium"
      },
      {
        "name": "19 Agropecuária",
        "slug": "agropecuaria",
        "weight": 0.13167259786476868,
        "activityCount": 37,
        "recurrence": "really-high"
      },
      {
        "name": "19.1 Sistemas agrícolas",
        "slug": "sistemas_agricolas",
        "weight": 0.03202846975088968,
        "activityCount": 9,
        "recurrence": "high"
      },
      {
        "name": "19.2 Revolução Verde",
        "slug": "revolucao_verde",
        "weight": 0.014234875444839857,
        "activityCount": 4,
        "recurrence": "low"
      },
      {
        "name": "19.3 Agropecuária no Brasil",
        "slug": "agropecuaria_no_brasil",
        "weight": 0.028469750889679714,
        "activityCount": 8,
        "recurrence": "medium"
      },
      {
        "name": "19.4 Agropecuária no mundo",
        "slug": "agropecuaria_no_mundo",
        "weight": 0.0071174377224199285,
        "activityCount": 2,
        "recurrence": "really-low"
      },
      {
        "name": "19.5 Disputas agrárias",
        "slug": "disputas_agrarias",
        "weight": 0.017793594306049824,
        "activityCount": 5,
        "recurrence": "medium"
      }
    ]
  },
  "sociologia": {
    "weight": 0.0481658692185008,
    "activityCount": 151,
    "recurrence": "medium",
    "topics": [
      {
        "name": "1 Teoria sociológica",
        "slug": "teoria_sociologica",
        "weight": 0.09933774834437085,
        "activityCount": 15,
        "recurrence": "medium"
      },
      {
        "name": "1.2 Karl Marx",
        "slug": "karl_marx",
        "weight": 0.006622516556291391,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "1.3 Émile Durkheim",
        "slug": "emile_durkheim",
        "weight": 0.013245033112582781,
        "activityCount": 2,
        "recurrence": "really-low"
      },
      {
        "name": "1.4 Max Weber",
        "slug": "max_weber",
        "weight": 0.013245033112582781,
        "activityCount": 2,
        "recurrence": "really-low"
      },
      {
        "name": "2 Socialização e instituições sociais",
        "slug": "socializacao_e_instituicoes_sociais",
        "weight": 0.026490066225165563,
        "activityCount": 4,
        "recurrence": "low"
      },
      {
        "name": "3 Cultura e indústria cultural",
        "slug": "cultura_e_industria_cultural",
        "weight": 0.33774834437086093,
        "activityCount": 51,
        "recurrence": "really-high"
      },
      {
        "name": "4 Trabalho, produção e classes sociais",
        "slug": "trabalho_producao_e_classes_sociais",
        "weight": 0.13245033112582782,
        "activityCount": 20,
        "recurrence": "high"
      },
      {
        "name": "5 Política, poder e Estado",
        "slug": "politica_poder_e_estado",
        "weight": 0.33112582781456956,
        "activityCount": 50,
        "recurrence": "really-high"
      },
      {
        "name": "6 Cidadania e movimentos sociais",
        "slug": "cidadania_e_movimentos_sociais",
        "weight": 0.3509933774834437,
        "activityCount": 53,
        "recurrence": "really-high"
      },
      {
        "name": "7 Meio ambiente e sociedade",
        "slug": "meio_ambiente_e_sociedade",
        "weight": 0.033112582781456956,
        "activityCount": 5,
        "recurrence": "low"
      },
      {
        "name": "9 Desigualdade, pobreza e conflito social",
        "slug": "desigualdade_pobreza_e_conflito_social",
        "weight": 0.17218543046357615,
        "activityCount": 26,
        "recurrence": "high"
      },
      {
        "name": "10 Mídia, redes sociais e comunicação",
        "slug": "midia_redes_sociais_e_comunicacao",
        "weight": 0.052980132450331126,
        "activityCount": 8,
        "recurrence": "medium"
      },
      {
        "name": "11 Antropologia",
        "slug": "antropologia",
        "weight": 0.2251655629139073,
        "activityCount": 34,
        "recurrence": "high"
      },
      {
        "name": "12 Etnologia",
        "slug": "etnologia",
        "weight": 0.006622516556291391,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "13 Sociologia no Brasil",
        "slug": "sociologia_no_brasil",
        "weight": 0.033112582781456956,
        "activityCount": 5,
        "recurrence": "low"
      },
      {
        "name": "14 Sociologia jurídica",
        "slug": "sociologia_juridica",
        "weight": 0.026490066225165563,
        "activityCount": 4,
        "recurrence": "low"
      }
    ]
  },
  "arte": {
    "weight": 0.023604465709728868,
    "activityCount": 74,
    "recurrence": "really-low",
    "topics": [
      {
        "name": "1 Artes visuais",
        "slug": "artes_visuais",
        "weight": 0.6891891891891891,
        "activityCount": 51,
        "recurrence": "really-high"
      },
      {
        "name": "1.1 Pré-história",
        "slug": "prehistoria",
        "weight": 0.013513513513513514,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "1.2 Antiguidade Oriental",
        "slug": "antiguidade_oriental",
        "weight": 0.013513513513513514,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "1.3 Antiguidade Clássica",
        "slug": "antiguidade_classica",
        "weight": 0.013513513513513514,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "1.4 Idade Média",
        "slug": "idade_media",
        "weight": 0.013513513513513514,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "1.6 América pré-colombiana",
        "slug": "america_precolombiana",
        "weight": 0.013513513513513514,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "1.7 Barroco e Rococó",
        "slug": "barroco_e_rococo",
        "weight": 0.013513513513513514,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "1.10 Realismo",
        "slug": "realismo",
        "weight": 0.013513513513513514,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "1.11 Impressionismo",
        "slug": "impressionismo",
        "weight": 0.02702702702702703,
        "activityCount": 2,
        "recurrence": "medium"
      },
      {
        "name": "1.13 Modernismo e vanguardas europeias",
        "slug": "modernismo_e_vanguardas_europeias",
        "weight": 0.0945945945945946,
        "activityCount": 7,
        "recurrence": "high"
      },
      {
        "name": "1.14 Arte contemporânea",
        "slug": "arte_contemporanea",
        "weight": 0.13513513513513514,
        "activityCount": 10,
        "recurrence": "really-high"
      },
      {
        "name": "1.15 Indústria cultural",
        "slug": "industria_cultural",
        "weight": 0.02702702702702703,
        "activityCount": 2,
        "recurrence": "medium"
      },
      {
        "name": "1.16 Pop art",
        "slug": "pop_art",
        "weight": 0.013513513513513514,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "1.17 Arte africana e afro-brasileira",
        "slug": "arte_africana_e_afrobrasileira",
        "weight": 0.02702702702702703,
        "activityCount": 2,
        "recurrence": "medium"
      },
      {
        "name": "2 Música",
        "slug": "musica",
        "weight": 0.20270270270270271,
        "activityCount": 15,
        "recurrence": "really-high"
      },
      {
        "name": "2.2 Música, linguagem e comunicação",
        "slug": "musica_linguagem_e_comunicacao",
        "weight": 0.17567567567567569,
        "activityCount": 13,
        "recurrence": "really-high"
      },
      {
        "name": "2.3 História da Música",
        "slug": "historia_da_musica",
        "weight": 0.013513513513513514,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "2.4 Música tradicional europeia",
        "slug": "musica_tradicional_europeia",
        "weight": 0.013513513513513514,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "2.10 Tropicália",
        "slug": "tropicalia",
        "weight": 0.013513513513513514,
        "activityCount": 1,
        "recurrence": "really-low"
      },
      {
        "name": "3 Artes Cênicas",
        "slug": "artes_cenicas",
        "weight": 0.13513513513513514,
        "activityCount": 10,
        "recurrence": "really-high"
      },
      {
        "name": "3.1 História das Artes Cênicas",
        "slug": "historia_das_artes_cenicas",
        "weight": 0.04054054054054054,
        "activityCount": 3,
        "recurrence": "high"
      },
      {
        "name": "3.2 Teorias do teatro",
        "slug": "teorias_do_teatro",
        "weight": 0.02702702702702703,
        "activityCount": 2,
        "recurrence": "medium"
      },
      {
        "name": "3.3 Cinema",
        "slug": "cinema",
        "weight": 0.013513513513513514,
        "activityCount": 1,
        "recurrence": "really-low"
      }
    ]
  }
};
