import { FeaturedProject, ProjectItem, AcademicProjectItem } from '@/types';

export const featuredProjectData: FeaturedProject = {
  id: "bi-analisis-data-akademik",
  title: "Business Intelligence untuk Analisis Data Akademik",
  category: "Business Intelligence / Data Warehouse / Information Systems",
  description: "Mengembangkan aplikasi Business Intelligence berbasis web untuk mendukung analisis data akademik mahasiswa dan dosen.",
  technologies: [
    "PostgreSQL",
    "Pentaho Data Integration (Kettle)",
    "Mondrian OLAP",
    "Metabase",
    "Laravel",
    "Next.js"
  ],
  workflow: [
    "Data Sources",
    "ETL dengan Pentaho",
    "Data Warehouse",
    "Mondrian OLAP",
    "Metabase Dashboard",
    "Analisis Data Akademik"
  ],
  details: [
    "Membangun Data Warehouse",
    "Mengembangkan proses ETL menggunakan Pentaho Data Integration",
    "Mengimplementasikan Mondrian OLAP",
    "Mendukung analisis multidimensi",
    "Mengimplementasikan fitur drill-down",
    "Mengembangkan dashboard interaktif menggunakan Metabase",
    "Mengembangkan aplikasi menggunakan Laravel, Next.js, dan PostgreSQL",
    "Mengintegrasikan komponen Business Intelligence ke dalam satu sistem"
  ],
  placeholders: {
    dashboard: "/images/dashboard-skripsi.png",
    olap: "/images/olap.png",
    system: "/images/beranda-sadaya.png",
    dataWarehouse: "/images/etl-job.png"
  },
  caseStudy: [
    {
      id: "overview",
      number: "01",
      title: "Overview",
      content: "Pengembangan sistem Business Intelligence komprehensif berbasis web yang dirancang khusus untuk memfasilitasi kebutuhan analisis data akademik mahasiswa dan dosen secara terpadu.",
      placeholder: "[ADD SYSTEM SCREENSHOT]"
    },
    {
      id: "problem",
      number: "02",
      title: "Problem",
      content: "Kebutuhan akan integrasi data akademik yang terpusat dan mekanisme analisis analitik yang efisien untuk membantu pemangku kepentingan akademik memantau tren dan data secara akurat."
    },
    {
      id: "objective",
      number: "03",
      title: "Objective",
      content: "Membangun ekosistem Business Intelligence end-to-end yang mengintegrasikan pemrosesan ETL, Data Warehouse, OLAP multidimensi, visualisasi dashboard interaktif, dan antarmuka web terpadu."
    },
    {
      id: "data-etl",
      number: "04",
      title: "Data & ETL",
      content: "Pengembangan alur ETL (Extract, Transform, Load) menggunakan Pentaho Data Integration (Kettle) untuk mengekstrak, membersihkan, dan mentransformasikan data akademik dari berbagai sumber operasional ke dalam struktur Data Warehouse."
    },
    {
      id: "data-warehouse",
      number: "05",
      title: "Data Warehouse",
      content: "Perancangan dan implementasi skema Data Warehouse pada PostgreSQL yang terstruktur untuk mendukung penyimpanan data historis serta pengolahan query analitik yang optimal.",
      placeholder: "[ADD DATA WAREHOUSE DIAGRAM]"
    },
    {
      id: "olap",
      number: "06",
      title: "OLAP",
      content: "Implementasi Mondrian OLAP untuk menyediakan analisis data multidimensi dengan kemampuan eksplorasi mendalam seperti drill-down, roll-up, dan slicing pada data akademik."
    },
    {
      id: "dashboard",
      number: "07",
      title: "Dashboard",
      content: "Penyusunan dashboard analitik interaktif menggunakan Metabase untuk menyajikan visualisasi indikator performa akademik yang informatif dan mudah dipahami.",
      placeholder: "[ADD DASHBOARD SCREENSHOT]"
    },
    {
      id: "web-app",
      number: "08",
      title: "Web Application",
      content: "Pengembangan antarmuka aplikasi web berbasis Laravel dan Next.js yang terhubung dengan PostgreSQL untuk menyatukan seluruh modul analitik dan dashboard ke dalam satu akses sistem terpadu."
    },
    {
      id: "result",
      number: "09",
      title: "Result",
      content: "Terwujudnya sistem Business Intelligence akademik terintegrasi yang mampu menyajikan data historis dan multidimensi untuk mendukung proses analisis data akademik mahasiswa dan dosen secara optimal."
    }
  ]
};

export const otherProjectsData: ProjectItem[] = [
  {
    id: "celerates-program",
    title: "Celerates Acceleration Program",
    subtitle: "Data Analyst & Business Intelligence",
    organization: "PT. Mitra Talenta Grup",
    period: "September 2024 – Desember 2024",
    category: "Data Analytics / Business Intelligence",
    description: "Mengikuti Studi Independen Bersertifikat Celerates Acceleration Program – Data Analyst & Business Intelligence dengan database DVD Rental sebagai studi kasus, meliputi proses ETL menggunakan Pentaho, perancangan data mart menggunakan PostgreSQL, serta pengembangan dashboard interaktif menggunakan Tableau dan Power BI.",
    skills: [
      "SQL",
      "Data Warehouse",
      "ETL",
      "Data Visualization",
      "Analytics Methodology & Business Acumen",
      "Data Governance"
    ],
    finalProjectInfo: "Analisis data end-to-end yang mencakup proses ETL, perancangan dan implementasi Data Warehouse, serta penyajian insight dalam bentuk dashboard interaktif.",
    tools: ["PostgreSQL", "Pentaho", "Tableau", "Power BI"],
    placeholders: {
      image: "/images/dashboard-dvd.png",
      dataWarehouse: "/images/datamart-dvd.png",
      link: "https://public.tableau.com/views/MoviePopularityAnalysisinDVDRentalsbyFrequency/Dashboard?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"
    }
  },
  {
    id: "customer-complaint-tableau-dashboard",
    title: "Customer Complaint Dashboard",
    subtitle: "Tableau Public Dashboard",
    category: "Data Analytics / Business Intelligence",
    description: "Dashboard analisis keluhan pelanggan (Customer Complaint) berbasis Tableau yang menyajikan ringkasan performa layanan melalui total keluhan, status penanganan, tren historis, serta distribusi geografis. Dashboard ini dirancang untuk memberikan gambaran menyeluruh mengenai efisiensi operasional layanan pelanggan, mengidentifikasi saluran komplain paling dominan, serta mengevaluasi ketepatan waktu respons bisnis (Timely Responses).",
    technologies: ["Tableau Public", "Data Visualization", "Customer Complaint Analysis"],
    placeholders: {
      detailImage: "/images/detail-status.png",
      link: "https://public.tableau.com/views/Tugas_AdeliaPutriP_22082010034_ComplaintA/Home?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"
    }
  },
  {
    id: "northwind-executive-summary-tableau",
    title: "Northwind Executive Summary",
    subtitle: "Tableau Public Dashboard",
    category: "Data Analytics / Business Intelligence",
    description: "Dashboard analisis penjualan berbasis Tableau yang menyajikan ringkasan performa bisnis melalui tren quantity, pendapatan berdasarkan kategori produk, supplier dengan kontribusi terbesar, serta distribusi biaya pengiriman berdasarkan perusahaan ekspedisi. Dashboard dirancang untuk memberikan gambaran menyeluruh mengenai performa penjualan dan operasional serta membantu mengidentifikasi kategori, supplier, dan periode dengan kontribusi terbesar.",
    technologies: ["Tableau Public", "Executive Dashboard", "Data Visualization"],
    placeholders: {
      link: "https://public.tableau.com/views/Book1_17319793044970/NorthwindExecutiveSummary?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"
    }
  },
  {
    id: "sku-usage-dashboard",
    title: "Dashboard Analyst - Analisis Penggunaan SKU",
    subtitle: "Data Analyst & Business Intelligence",
    category: "Data Analytics / Business Intelligence",
    description: "Dashboard interaktif untuk memantau dan menganalisis penggunaan SKU pada WH Surabaya dan WH Jakbar. Data diolah dari Excel dan divisualisasikan menggunakan Looker Studio untuk menghasilkan informasi mengenai volume penggunaan, rata-rata pemakaian harian, serta ranking SKU berdasarkan tingkat penggunaannya. Melalui dashboard ini, pengguna dapat melakukan eksplorasi data berdasarkan periode waktu dan gudang, serta mengidentifikasi SKU dengan penggunaan tertinggi melalui tabel ranking dan visualisasi Top 20 SKU.",
    tools: ["Microsoft Excel", "Looker Studio"],
    placeholders: {
      image: "/images/sku-usage-dashboard.png",
      link: "https://datastudio.google.com/reporting/95c9e57e-f34c-4090-af54-c8ae36677aad"
    }
  }
];

export const academicProjectsData: AcademicProjectItem[] = [
  {
    id: "acad-db-mysql",
    title: "Pengelolaan Database Desktop & Website",
    category: "Database Management",
    description: "Merancang dan mengelola database menggunakan MySQL untuk aplikasi desktop dan website.",
    tools: ["MySQL"]
  },
  {
    id: "acad-etl-pipeline",
    title: "Pengembangan Proses ETL",
    category: "Data Warehouse & ETL",
    description: "Mengembangkan proses ETL sebagai dasar pengolahan dan visualisasi data.",
    tools: ["Pentaho Data Integration (Kettle)"]
  },
  {
    id: "acad-interactive-dashboards",
    title: "Dashboard Analitik Interaktif",
    category: "Data Visualization & BI",
    description: "Membuat dashboard interaktif menggunakan Tableau dan Power BI.",
    tools: ["Tableau", "Microsoft Power BI"]
  }
];

