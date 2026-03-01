# 📚 Acadify

**Academic Document Creator for NEUB Students**

A modern, responsive web application designed specifically for North East University Bangladesh (NEUB) students to create professional academic cover pages for assignments, lab reports, and thesis papers.

## 🌐 Live Demo

**[https://acadify-silk.vercel.app/](https://acadify-silk.vercel.app/)**

## ✨ Features

- 🎨 **Professional Cover Pages** - Generate beautifully formatted A4-sized academic cover pages
- 📝 **Multiple Document Types** - Support for Assignments, Lab Reports, and Thesis Papers
- 🎯 **Multi-Step Form** - Easy-to-use 4-step wizard for entering document details
- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices
- 🖨️ **Print & Download** - One-click PDF generation and printing
- 🎭 **University Branding** - Official NEUB logo and watermark integration
- ✏️ **Live Preview** - Real-time preview of your document as you type
- 🌟 **Modern UI** - Clean, gradient-based design with glassmorphism effects
- 🚀 **Fast & Lightweight** - Built with Next.js for optimal performance

## 🛠️ Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/)
- **UI Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Font:** [Geist](https://vercel.com/font)
- **Deployment:** [Vercel](https://vercel.com/)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and pnpm (or npm/yarn)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/acadify.git
cd acadify
```

2. Install dependencies:

```bash
pnpm install
# or
npm install
```

3. Run the development server:

```bash
pnpm dev
# or
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📖 Usage

1. **Visit the Homepage** - Click "Get Started" to begin
2. **Step 1: Document Details** - Enter document type, department, course code, and title
3. **Step 2: Topic & Assignment** - Add your assignment/topic details and submission date
4. **Step 3: Instructor Information** - Fill in teacher's name and designation
5. **Step 4: Student Information** - Enter your name, ID, section, semester, and batch
6. **Generate PDF** - Click "Generate PDF" to preview and print your cover page

## 📁 Project Structure

```
acadify/
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.js        # Root layout with metadata
│   └── page.jsx         # Main application component
├── public/
│   ├── logo.png         # Acadify logo
│   ├── NEUB Logo.png    # University logo
│   └── developer.jpg    # Developer profile picture
├── package.json
└── README.md
```

## 🎨 Key Components

- **HomePage** - Landing page with features and call-to-action
- **CoverPage** - A4-formatted document with NEUB branding
- **FormInput** - Reusable input components with icons
- **SectionCard** - Form section containers with gradient headers
- **DeveloperModal** - Information about the developer

## 👨‍💻 Developer

**Jakaria Chowdhury Tajwone**  
Full Stack Developer  
Computer Science & Engineering  
North East University Bangladesh

## 📄 License

This project is created for educational purposes for NEUB students.

## 🙏 Acknowledgments

- North East University Bangladesh for institutional support
- All NEUB students who inspired this project

---

**Made with ❤️ for NEUB Students**
