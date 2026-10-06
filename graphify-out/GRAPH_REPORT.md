# Graph Report - moeketsil  (2026-10-06)

## Corpus Check
- Large corpus: 80 files · ~1,091,748 words. Semantic extraction will be expensive (many Claude tokens). Consider running on a subfolder.

## Summary
- 154 nodes · 186 edges · 11 communities (7 shown, 4 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Page Sections & GSAP Animation
- Package Scripts & Linting
- Technologies Icon Grid
- TypeScript Compiler Config
- Projects Showcase
- Client Logos (Skills)
- Dev Dependencies
- Root Layout & Next Config
- Runtime Dependencies
- PostCSS Config

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `Home()` - 12 edges
3. `next` - 6 edges
4. `scripts` - 5 edges
5. `@gsap/react` - 5 edges
6. `gsap` - 5 edges
7. `react` - 4 edges
8. `Skills()` - 4 edges
9. `About()` - 3 edges
10. `Contact()` - 3 edges

## Surprising Connections (you probably didn't know these)
- `Home()` --calls--> `Skills()`  [EXTRACTED]
  src/app/page.tsx → src/components/Skills.tsx
- `Home()` --calls--> `About()`  [EXTRACTED]
  src/app/page.tsx → src/components/About.tsx
- `Home()` --calls--> `Contact()`  [EXTRACTED]
  src/app/page.tsx → src/components/Contact.tsx
- `Home()` --calls--> `Footer()`  [EXTRACTED]
  src/app/page.tsx → src/components/Footer.tsx
- `Home()` --calls--> `Hero()`  [EXTRACTED]
  src/app/page.tsx → src/components/Hero.tsx

## Import Cycles
- None detected.

## Communities (11 total, 4 thin omitted)

### Community 0 - "Page Sections & GSAP Animation"
Cohesion: 0.13
Nodes (19): gsap, @gsap/react, react, Home(), About(), Contact(), links, Footer() (+11 more)

### Community 1 - "Package Scripts & Linting"
Cohesion: 0.08
Nodes (21): eslintConfig, name, private, scripts, build, dev, lint, start (+13 more)

### Community 3 - "TypeScript Compiler Config"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 5 - "Client Logos (Skills)"
Cohesion: 0.14
Nodes (4): Logo, LogoItem(), logos, Skills()

### Community 6 - "Dev Dependencies"
Cohesion: 0.20
Nodes (10): devDependencies, eslint, eslint-config-next, @playwright/test, tailwindcss, @tailwindcss/postcss, @types/node, @types/react (+2 more)

### Community 7 - "Root Layout & Next Config"
Cohesion: 0.22
Nodes (5): nextConfig, next, inter, metadata, outfit

### Community 8 - "Runtime Dependencies"
Cohesion: 0.33
Nodes (6): dependencies, gsap, @gsap/react, next, react, react-dom

## Knowledge Gaps
- **64 isolated node(s):** `eslintConfig`, `nextConfig`, `name`, `version`, `private` (+59 more)
  These have ≤1 connection - possible missing edges. (Counts symbols only; 112 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `Root Layout & Next Config` to `Package Scripts & Linting`, `Technologies Icon Grid`, `Projects Showcase`, `Client Logos (Skills)`?**
  _High betweenness centrality (0.275) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `Dev Dependencies` to `Package Scripts & Linting`?**
  _High betweenness centrality (0.096) - this node is a cross-community bridge._
- **Why does `dependencies` connect `Runtime Dependencies` to `Package Scripts & Linting`?**
  _High betweenness centrality (0.054) - this node is a cross-community bridge._
- **What connects `eslintConfig`, `nextConfig`, `name` to the rest of the system?**
  _64 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Page Sections & GSAP Animation` be split into smaller, more focused modules?**
  _Cohesion score 0.13227513227513227 - nodes in this community are weakly interconnected._
- **Should `Package Scripts & Linting` be split into smaller, more focused modules?**
  _Cohesion score 0.08333333333333333 - nodes in this community are weakly interconnected._
- **Should `Technologies Icon Grid` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._