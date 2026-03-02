"use client";

import { useState, useRef, useCallback } from "react";
import {
  BookOpen,
  User,
  GraduationCap,
  FileText,
  FlaskConical,
  Calendar,
  Download,
  Eye,
  ChevronDown,
  Printer,
  Sparkles,
  Building2,
  Hash,
  Tag,
  Award,
  IdCard,
  Clock,
  ArrowRight,
  CheckCircle,
  ArrowLeft,
} from "lucide-react";

// ─── Cover Page Component ─────────────────────────────────────────────────────
function CoverPage({ data, printRef }) {
  const formattedDate = data.date
    ? new Date(data.date)
        .toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        })
        .toUpperCase()
    : "DATE NOT SET";

  if (data.format === "simple") {
    return (
      <SimpleCoverPage
        data={data}
        printRef={printRef}
        formattedDate={formattedDate}
      />
    );
  }

  return (
    <ClassicCoverPage
      data={data}
      printRef={printRef}
      formattedDate={formattedDate}
    />
  );
}

// ─── Classic Format ────────────────────────────────────────────────────────────
function ClassicCoverPage({ data, printRef, formattedDate }) {
  return (
    <div
      ref={printRef}
      id="cover-page-print"
      style={{
        width: "210mm",
        minHeight: "297mm",
        backgroundColor: "#FFFFFF",
        fontFamily: "'Georgia', 'Times New Roman', serif",
        color: "#001B2E",
        padding: "16mm 18mm",
        boxSizing: "border-box",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Watermark */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          opacity: 0.06,
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        <img
          src="/NEUB%20Logo.png"
          alt="Watermark"
          style={{ width: "450px", height: "450px", objectFit: "contain" }}
        />
      </div>

      {/* Double-line border */}
      <div style={{ position: "absolute", inset: "8mm", border: "2.5px solid #001B2E", pointerEvents: "none" }} />
      <div style={{ position: "absolute", inset: "11mm", border: "1px solid #1F9688", pointerEvents: "none" }} />

      {/* Corner ornaments */}
      {["top-left", "top-right", "bottom-left", "bottom-right"].map((pos) => (
        <div
          key={pos}
          style={{
            position: "absolute",
            width: "14px",
            height: "14px",
            borderColor: "#1F9688",
            borderStyle: "solid",
            borderWidth:
              pos === "top-left" ? "2px 0 0 2px"
              : pos === "top-right" ? "2px 2px 0 0"
              : pos === "bottom-left" ? "0 0 2px 2px"
              : "0 2px 2px 0",
            top: pos.includes("top") ? "14mm" : "auto",
            bottom: pos.includes("bottom") ? "14mm" : "auto",
            left: pos.includes("left") ? "14mm" : "auto",
            right: pos.includes("right") ? "14mm" : "auto",
          }}
        />
      ))}

      {/* Content wrapper */}
      <div style={{ width: "100%", flex: 1, display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "6mm" }}>

        {/* University Header */}
        <div style={{ textAlign: "center", marginBottom: "6mm" }}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "4mm" }}>
            <img src="/NEUB%20Logo.png" alt="NEUB Logo" style={{ width: "90px", height: "90px" }} />
          </div>
          <h1 style={{ fontSize: "22px", fontWeight: "bold", letterSpacing: "2px", color: "#001B2E", marginBottom: "3px", textTransform: "uppercase", fontFamily: "'Georgia', serif" }}>
            North East University Bangladesh
          </h1>
          <div style={{ width: "60%", margin: "0 auto 4px", height: "1px", background: "linear-gradient(to right, transparent, #1F9688, transparent)" }} />
          <p style={{ fontSize: "13px", color: "#1F9688", letterSpacing: "1px", fontFamily: "Arial, sans-serif", fontWeight: "600" }}>
            {data.departmentName || "Department of Computer Science & Engineering"}
          </p>
        </div>

        {/* Decorative divider */}
        <div style={{ width: "80%", display: "flex", alignItems: "center", gap: "8px", marginBottom: "8mm" }}>
          <div style={{ flex: 1, height: "1px", backgroundColor: "#99D5D5" }} />
          <div style={{ width: "6px", height: "6px", background: "#1F9688", transform: "rotate(45deg)" }} />
          <div style={{ flex: 1, height: "1px", backgroundColor: "#99D5D5" }} />
        </div>

        {/* Doc Type Badge */}
        <div style={{ border: "2px solid #001B2E", padding: "6px 28px", marginBottom: "7mm", letterSpacing: "6px", fontSize: "18px", fontWeight: "bold", textTransform: "uppercase", color: "#001B2E", fontFamily: "'Georgia', serif" }}>
          {data.docType}
        </div>

        {/* ON Section */}
        <div style={{ textAlign: "center", marginBottom: "7mm", width: "85%" }}>
          <p style={{ fontSize: "11px", letterSpacing: "3px", color: "#555", textTransform: "uppercase", fontFamily: "Arial, sans-serif", marginBottom: "4px" }}>ON</p>
          <h2 style={{ fontSize: "15px", fontWeight: "bold", color: "#001B2E", fontFamily: "'Georgia', serif", lineHeight: "1.5", borderBottom: "1px dashed #99D5D5", paddingBottom: "6px" }}>
            &ldquo;{data.assignmentTopic || "Topic Not Specified"}&rdquo;
          </h2>
        </div>

        {/* Course Info */}
        <div style={{ width: "85%", backgroundColor: "#f7fafa", border: "1px solid #99D5D5", borderRadius: "4px", padding: "8px 14px", marginBottom: "8mm", textAlign: "center" }}>
          <p style={{ fontSize: "12px", fontFamily: "Arial, sans-serif", color: "#333" }}>
            <strong style={{ color: "#001B2E" }}>Course Code:</strong> {data.courseCode || "CSE-XXX"}
            <span style={{ margin: "0 10px", color: "#99D5D5" }}>|</span>
            <strong style={{ color: "#001B2E" }}>Course Title:</strong> {data.courseTitle || "Not Specified"}
          </p>
        </div>

        {/* Submitted To / By Grid */}
        <div style={{ width: "85%", display: "flex", justifyContent: "space-between", gap: "6mm", marginBottom: "10mm", marginTop: "auto" }}>
          {/* Submitted To */}
          <div style={{ border: "1px solid #001B2E", borderRadius: "3px", overflow: "hidden", flex: "1", minWidth: "0" }}>
            <div style={{ backgroundColor: "#001B2E", padding: "5px 10px", textAlign: "center" }}>
              <p style={{ color: "#99D5D5", fontSize: "9px", letterSpacing: "2px", fontFamily: "Arial, sans-serif", textTransform: "uppercase", margin: 0 }}>Submitted To</p>
            </div>
            <div style={{ padding: "8px 12px", fontFamily: "Arial, sans-serif" }}>
              <p style={{ fontSize: "12px", fontWeight: "bold", color: "#001B2E", marginBottom: "3px" }}>{data.teacherName || "Teacher Name"}</p>
              <p style={{ fontSize: "10px", color: "#1F9688", fontStyle: "italic" }}>{data.teacherDesignation || "Designation"}</p>
              <p style={{ fontSize: "10px", color: "#555", marginTop: "2px" }}>Dept. of {data.departmentName?.replace("Department of ", "") || "CSE"}</p>
              <p style={{ fontSize: "10px", color: "#555" }}>North East University Bangladesh</p>
            </div>
          </div>

          {/* Submitted By */}
          <div style={{ border: "1px solid #001B2E", borderRadius: "3px", overflow: "hidden", flex: "1", minWidth: "0" }}>
            <div style={{ backgroundColor: "#001B2E", padding: "5px 10px", textAlign: "center" }}>
              <p style={{ color: "#99D5D5", fontSize: "9px", letterSpacing: "2px", fontFamily: "Arial, sans-serif", textTransform: "uppercase", margin: 0 }}>Submitted By</p>
            </div>
            <div style={{ padding: "8px 12px", fontFamily: "Arial, sans-serif" }}>
              <p style={{ fontSize: "12px", fontWeight: "bold", color: "#001B2E", marginBottom: "3px" }}>{data.studentName || "Student Name"}</p>
              <p style={{ fontSize: "10px", color: "#555", marginBottom: "2px" }}><strong>ID:</strong> {data.registrationId || "XXXX-XX-XXXX"}</p>
              <p style={{ fontSize: "10px", color: "#555", marginBottom: "2px" }}><strong>Roll:</strong> {data.rollNo || "XXXX"}</p>
              <p style={{ fontSize: "10px", color: "#555" }}><strong>Semester:</strong> {data.semester || "Xth Semester"}</p>
            </div>
          </div>
        </div>

        {/* Footer date */}
        <div style={{ width: "85%", borderTop: "1.5px solid #001B2E", paddingTop: "5mm", textAlign: "center" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
            <div style={{ height: "1px", flex: 1, backgroundColor: "#99D5D5" }} />
            <p style={{ fontSize: "11px", fontFamily: "Arial, sans-serif", letterSpacing: "2px", color: "#001B2E", fontWeight: "bold" }}>
              DATE: {formattedDate}
            </p>
            <div style={{ height: "1px", flex: 1, backgroundColor: "#99D5D5" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Simple Format ─────────────────────────────────────────────────────────────
function SimpleCoverPage({ data, printRef, formattedDate }) {
  return (
    <div
      ref={printRef}
      id="cover-page-print"
      style={{
        width: "210mm", minHeight: "297mm",
        backgroundColor: "#FFFFFF",
        fontFamily: "'Arial', 'Helvetica', sans-serif",
        color: "#000000", padding: "20mm 25mm",
        boxSizing: "border-box", position: "relative",
        display: "flex", flexDirection: "column", alignItems: "center",
      }}
    >
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", opacity: 0.03, pointerEvents: "none", zIndex: 0 }}>
        <img src="/NEUB%20Logo.png" alt="Watermark" style={{ width: "450px", height: "450px", objectFit: "contain" }} />
      </div>
      <div style={{ width: "100%", height: "2px", backgroundColor: "#000000", marginBottom: "12mm" }} />
      <div style={{ textAlign: "center", marginBottom: "10mm", width: "100%" }}>
        <img src="/NEUB%20Logo.png" alt="NEUB Logo" style={{ width: "65px", height: "65px", marginBottom: "6mm", display: "block", marginLeft: "auto", marginRight: "auto" }} />
        <h1 style={{ fontSize: "20px", fontWeight: "bold", color: "#000000", marginBottom: "4px", textTransform: "uppercase" }}>North East University Bangladesh</h1>
        <p style={{ fontSize: "11px", color: "#333333", marginTop: "3px" }}>{data.departmentName || "Department of Computer Science & Engineering"}</p>
      </div>
      <div style={{ width: "60%", height: "1px", backgroundColor: "#cccccc", marginBottom: "10mm" }} />
      <div style={{ border: "1px solid #000000", padding: "6px 25px", marginBottom: "10mm" }}>
        <p style={{ fontSize: "14px", fontWeight: "bold", letterSpacing: "3px", textTransform: "uppercase", color: "#000000" }}>{data.docType}</p>
      </div>
      <div style={{ textAlign: "center", marginBottom: "10mm", width: "85%" }}>
        <h2 style={{ fontSize: "18px", fontWeight: "bold", color: "#000000", lineHeight: "1.4" }}>{data.assignmentTopic || "Topic Not Specified"}</h2>
      </div>
      <div style={{ width: "85%", padding: "8px 12px", border: "1px solid #cccccc", marginBottom: "12mm", textAlign: "center", backgroundColor: "#fafafa" }}>
        <p style={{ fontSize: "11px", color: "#333333" }}>
          <strong>Course Code:</strong> {data.courseCode || "CSE-XXX"}{" | "}
          <strong>Course Title:</strong> {data.courseTitle || "Not Specified"}
        </p>
      </div>
      <div style={{ flex: 1 }} />
      <div style={{ width: "100%", display: "flex", gap: "8mm", marginBottom: "10mm" }}>
        <div style={{ flex: 1, padding: "10px 12px", border: "1px solid #000000" }}>
          <p style={{ fontSize: "9px", color: "#666666", textTransform: "uppercase", marginBottom: "5px", fontWeight: "600" }}>Submitted To</p>
          <p style={{ fontSize: "12px", fontWeight: "bold", color: "#000000", marginBottom: "2px" }}>{data.teacherName || "Teacher Name"}</p>
          <p style={{ fontSize: "10px", color: "#333333", marginBottom: "2px" }}>{data.teacherDesignation || "Designation"}</p>
          <p style={{ fontSize: "9px", color: "#666666" }}>{data.departmentName?.replace("Department of ", "") || "CSE"}</p>
        </div>
        <div style={{ flex: 1, padding: "10px 12px", border: "1px solid #000000" }}>
          <p style={{ fontSize: "9px", color: "#666666", textTransform: "uppercase", marginBottom: "5px", fontWeight: "600" }}>Submitted By</p>
          <p style={{ fontSize: "12px", fontWeight: "bold", color: "#000000", marginBottom: "2px" }}>{data.studentName || "Student Name"}</p>
          <p style={{ fontSize: "9px", color: "#333333" }}><strong>ID:</strong> {data.registrationId || "XXXX-XX-XXXX"}</p>
          <p style={{ fontSize: "9px", color: "#333333" }}><strong>Roll:</strong> {data.rollNo || "XXXX"}</p>
          <p style={{ fontSize: "9px", color: "#666666" }}>{data.semester || "Xth Semester"}</p>
        </div>
      </div>
      <div style={{ width: "100%", paddingTop: "8mm", borderTop: "1px solid #000000", textAlign: "center" }}>
        <p style={{ fontSize: "10px", color: "#000000", fontWeight: "600" }}>{formattedDate}</p>
      </div>
    </div>
  );
}

// ─── Input Component ───────────────────────────────────────────────────────────
function FormInput({ label, icon: Icon, value, onChange, placeholder, type = "text" }) {
  return (
    <div className="space-y-2">
      <label className="flex items-center gap-2 text-xs font-medium" style={{ color: "#cbd5e1" }}>
        <Icon size={13} strokeWidth={2.5} />
        {label}
      </label>
      <input
        type={type} value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-3.5 py-2.5 rounded-lg text-sm outline-none transition-all duration-200"
        style={{ backgroundColor: "rgba(15, 23, 42, 0.6)", border: "1px solid rgba(51, 65, 85, 0.8)", color: "#e2e8f0", fontFamily: "inherit", boxShadow: "inset 0 1px 3px rgba(0, 0, 0, 0.3)" }}
        onFocus={(e) => { e.currentTarget.style.borderColor = "#8b5cf6"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(139, 92, 246, 0.15), inset 0 1px 3px rgba(0, 0, 0, 0.3)"; }}
        onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(51, 65, 85, 0.8)"; e.currentTarget.style.boxShadow = "inset 0 1px 3px rgba(0, 0, 0, 0.3)"; }}
      />
    </div>
  );
}

// ─── Section Card Component ────────────────────────────────────────────────────
function SectionCard({ title, children }) {
  return (
    <div className="rounded-xl overflow-hidden" style={{ background: "linear-gradient(135deg, rgba(30, 41, 59, 0.4) 0%, rgba(15, 23, 42, 0.6) 100%)", border: "1px solid rgba(100, 116, 139, 0.3)", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)", backdropFilter: "blur(8px)" }}>
      <div className="px-4 py-3" style={{ background: "linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))", borderBottom: "1px solid rgba(100, 116, 139, 0.2)" }}>
        <p className="text-xs font-semibold text-slate-100 tracking-wide">{title}</p>
      </div>
      <div className="p-4 space-y-3">{children}</div>
    </div>
  );
}

// ─── Home Page Component ───────────────────────────────────────────────────────
function HomePage({ onGetStarted }) {
  const [showDeveloper, setShowDeveloper] = useState(false);

  return (
    <div className="min-h-screen flex flex-col p-6" style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)", fontFamily: "'Inter', 'DM Sans', 'Segoe UI', system-ui, sans-serif" }}>
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-2xl blur-xl"></div>
              <img src="/logo.png" alt="Acadify Logo" className="w-24 h-24 rounded-2xl relative z-10" style={{ boxShadow: "0 8px 16px rgba(0, 0, 0, 0.4)" }} />
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text" style={{ WebkitTextFillColor: "transparent" }}>Acadify</h1>
          <p className="text-xl text-slate-300 mb-2">Academic Document Creator</p>
          <p className="text-sm text-slate-400 max-w-md mx-auto">Create professional cover pages for your assignments and lab reports in seconds</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl w-full">
          {[
            { icon: FileText, title: "Professional Templates", desc: "University-standard cover page designs" },
            { icon: Sparkles, title: "Live Preview", desc: "See your changes in real-time" },
            { icon: Printer, title: "Print Ready", desc: "Export to PDF instantly" },
          ].map((feature, idx) => (
            <div key={idx} className="p-6 rounded-xl text-center" style={{ background: "linear-gradient(135deg, rgba(30, 41, 59, 0.5), rgba(15, 23, 42, 0.7))", border: "1px solid rgba(100, 116, 139, 0.3)", backdropFilter: "blur(10px)" }}>
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-lg" style={{ background: "linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2))" }}>
                  <feature.icon size={24} className="text-blue-400" />
                </div>
              </div>
              <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-slate-400">{feature.desc}</p>
            </div>
          ))}
        </div>

        <button onClick={onGetStarted} className="flex items-center gap-3 px-8 py-4 rounded-xl text-lg font-semibold text-white transition-all duration-200 hover:shadow-2xl hover:shadow-blue-500/40 active:scale-95" style={{ background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)", boxShadow: "0 8px 24px rgba(59, 130, 246, 0.4)" }}>
          Get Started <ArrowRight size={20} />
        </button>
      </div>

      <div className="text-center py-6 border-t border-slate-700/30 mt-8">
        <div className="flex items-center justify-center gap-4 text-xs text-slate-400 mb-2">
          <p>Made with ❤️ for NEUB Students</p>
        </div>
        <button onClick={() => setShowDeveloper(true)} className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium">
          Meet the Developer →
        </button>
      </div>

      {showDeveloper && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4" style={{ background: "rgba(0, 0, 0, 0.7)", backdropFilter: "blur(4px)" }} onClick={() => setShowDeveloper(false)}>
          <div className="p-8 rounded-xl max-w-md w-full relative" style={{ background: "linear-gradient(135deg, rgba(30, 41, 59, 0.95), rgba(15, 23, 42, 0.95))", border: "1px solid rgba(100, 116, 139, 0.3)", backdropFilter: "blur(10px)", boxShadow: "0 20px 60px rgba(0, 0, 0, 0.5)" }} onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setShowDeveloper(false)} className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
            </button>
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 rounded-full blur-lg" style={{ background: "linear-gradient(135deg, #3b82f6, #8b5cf6)", opacity: 0.4 }}></div>
                <div className="relative rounded-full p-1" style={{ background: "linear-gradient(135deg, #3b82f6, #8b5cf6, #3b82f6)", boxShadow: "0 8px 30px rgba(59, 130, 246, 0.5)" }}>
                  <div className="rounded-full p-1 bg-slate-800">
                    <img src="/developer.jpg" alt="Developer" className="w-24 h-24 rounded-full object-cover border-2 border-slate-700/50" />
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">Developer</h3>
              <div className="w-20 h-0.5 mx-auto" style={{ background: "linear-gradient(90deg, #3b82f6, #8b5cf6)" }}></div>
            </div>
            <div className="space-y-5">
              <div className="text-center">
                <h4 className="text-2xl font-bold mb-1" style={{ background: "linear-gradient(135deg, #3b82f6, #8b5cf6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Jakaria Chowdhury Tajwone</h4>
                <p className="text-sm text-slate-400">Full Stack Developer</p>
              </div>
              <div className="p-4 rounded-lg" style={{ background: "linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))", border: "1px solid rgba(59, 130, 246, 0.2)" }}>
                <div className="flex items-center justify-center gap-2 mb-1">
                  <GraduationCap className="w-4 h-4 text-blue-400" />
                  <p className="text-xs font-medium text-blue-300 uppercase tracking-wider">Department</p>
                </div>
                <p className="text-base font-semibold text-white text-center">Computer Science & Engineering</p>
              </div>
              <div className="p-4 rounded-lg" style={{ background: "linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(59, 130, 246, 0.1))", border: "1px solid rgba(139, 92, 246, 0.2)" }}>
                <div className="flex items-center justify-center gap-2 mb-1">
                  <Building2 className="w-4 h-4 text-purple-400" />
                  <p className="text-xs font-medium text-purple-300 uppercase tracking-wider">Institution</p>
                </div>
                <p className="text-base font-semibold text-white text-center">North East University Bangladesh</p>
              </div>
              <div className="pt-4 border-t border-slate-700/50">
                <p className="text-xs text-slate-500 text-center">Developed with ❤️ for NEUB Students</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Main Page ─────────────────────────────────────────────────────────────────
export default function Page() {
  const [currentView, setCurrentView] = useState("home");
  const [currentStep, setCurrentStep] = useState(1);
  const printRef = useRef(null);
  const [isPdfGenerating, setIsPdfGenerating] = useState(false);
  const [form, setForm] = useState({
    docType: "ASSIGNMENT",
    format: "classic",
    departmentName: "Department of Computer Science & Engineering",
    courseCode: "CSE-463",
    courseTitle: "Machine Learning",
    assignmentTopic: "Decision Tree Algorithm",
    teacherName: "Dr. Mohammad Rafiqul Islam",
    teacherDesignation: "Head & Associate Professor",
    studentName: "Md. Rakib Hassan",
    registrationId: "2021-1-60-003",
    rollNo: "2021331060003",
    semester: "8th Semester",
    date: new Date().toISOString().split("T")[0],
  });

  const update = useCallback((key) => (val) => { setForm((p) => ({ ...p, [key]: val })); }, []);

  // ─── ✅ FIXED: Works on Android Chrome, iOS Safari, and Desktop ──────────────
  const handlePrint = () => {
    const printContent = document.getElementById("cover-page-print");
    if (!printContent || isPdfGenerating) return;

    setIsPdfGenerating(true);

    // Step 1: Create/reuse a hidden print-only style tag
    const STYLE_ID = "acadify-print-style";
    let styleEl = document.getElementById(STYLE_ID);
    if (!styleEl) {
      styleEl = document.createElement("style");
      styleEl.id = STYLE_ID;
      document.head.appendChild(styleEl);
    }
    styleEl.innerHTML = `
      @media print {
        @page { size: A4; margin: 0; }
        html, body { margin: 0 !important; padding: 0 !important; }
        body > * { display: none !important; }
        #acadify-print-root { display: block !important; }
      }
    `;

    // Step 2: Create/reuse a dedicated print root container (hidden on screen)
    let printRoot = document.getElementById("acadify-print-root");
    if (!printRoot) {
      printRoot = document.createElement("div");
      printRoot.id = "acadify-print-root";
      printRoot.style.cssText = "display:none;";
      document.body.appendChild(printRoot);
    }

    // Step 3: Clone the cover page into the print root
    printRoot.innerHTML = "";
    const clone = printContent.cloneNode(true);
    // Remove any preview transforms so it prints at full A4 size
    clone.style.transform = "none";
    clone.style.position = "static";
    clone.style.margin = "0";
    clone.style.boxShadow = "none";
    printRoot.appendChild(clone);

    // Step 4: Trigger print on the SAME page
    // This works on Android Chrome + iOS Safari + Desktop — no popup, never blocked
    setTimeout(() => {
      window.print();
      setIsPdfGenerating(false);
    }, 80);

    // Step 5: Clean up after print dialog closes
    const cleanup = () => {
      styleEl.innerHTML = "";
      printRoot.innerHTML = "";
      window.removeEventListener("afterprint", cleanup);
    };
    window.addEventListener("afterprint", cleanup);

    // Safety fallback: clean up after 30s if afterprint never fires (some older browsers)
    setTimeout(cleanup, 30000);
  };

  if (currentView === "home") {
    return <HomePage onGetStarted={() => setCurrentView("editor")} />;
  }

  const renderFormStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
            <SectionCard title="Document Type">
              <div className="grid grid-cols-2 gap-2">
                {["ASSIGNMENT", "LAB REPORT"].map((type) => (
                  <button key={type} onClick={() => update("docType")(type)} className="py-3 rounded-lg text-xs font-semibold transition-all duration-200"
                    style={form.docType === type
                      ? { background: "linear-gradient(135deg, #3b82f6, #8b5cf6)", color: "#fff", border: "1px solid transparent", boxShadow: "0 4px 12px rgba(59, 130, 246, 0.4)", transform: "translateY(-1px)" }
                      : { background: "rgba(15, 23, 42, 0.5)", color: "#94a3b8", border: "1px solid rgba(51, 65, 85, 0.8)" }
                    }>
                    {type === "ASSIGNMENT" ? <><FileText size={12} className="inline mr-1" />Assignment</> : <><FlaskConical size={12} className="inline mr-1" />Lab Report</>}
                  </button>
                ))}
              </div>
            </SectionCard>

            <SectionCard title="Cover Page Style">
              <div className="grid grid-cols-2 gap-2">
                {[{ id: "classic", name: "Classic", icon: "📄" }, { id: "simple", name: "Simple", icon: "📋" }].map((format) => (
                  <button key={format.id} onClick={() => update("format")(format.id)} className="py-3 px-2 rounded-lg text-xs font-semibold transition-all duration-200 flex flex-col items-center gap-1"
                    style={form.format === format.id
                      ? { background: "linear-gradient(135deg, #3b82f6, #8b5cf6)", color: "#fff", border: "1px solid transparent", boxShadow: "0 4px 12px rgba(59, 130, 246, 0.4)", transform: "translateY(-1px)" }
                      : { background: "rgba(15, 23, 42, 0.5)", color: "#94a3b8", border: "1px solid rgba(51, 65, 85, 0.8)" }
                    }>
                    <span className="text-xl">{format.icon}</span>
                    <span>{format.name}</span>
                  </button>
                ))}
              </div>
            </SectionCard>

            <SectionCard title="University & Department">
              <FormInput label="Department Name" icon={Building2} value={form.departmentName} onChange={update("departmentName")} placeholder="Dept. of Computer Science & Engineering" />
            </SectionCard>
          </>
        );
      case 2:
        return (
          <SectionCard title="Course Information">
            <div className="grid grid-cols-2 gap-3">
              <FormInput label="Course Code" icon={Hash} value={form.courseCode} onChange={update("courseCode")} placeholder="CSE-463" />
              <FormInput label="Course Title" icon={Tag} value={form.courseTitle} onChange={update("courseTitle")} placeholder="Machine Learning" />
            </div>
            <FormInput label="Assignment Topic" icon={Award} value={form.assignmentTopic} onChange={update("assignmentTopic")} placeholder="Decision Tree Algorithm" />
          </SectionCard>
        );
      case 3:
        return (
          <SectionCard title="Submitted To">
            <FormInput label="Teacher Name" icon={GraduationCap} value={form.teacherName} onChange={update("teacherName")} placeholder="Dr. Mohammad Rafiqul Islam" />
            <FormInput label="Designation" icon={Award} value={form.teacherDesignation} onChange={update("teacherDesignation")} placeholder="Head & Associate Professor" />
          </SectionCard>
        );
      case 4:
        return (
          <>
            <SectionCard title="Submitted By">
              <FormInput label="Student Name" icon={User} value={form.studentName} onChange={update("studentName")} placeholder="Md. Rakib Hassan" />
              <FormInput label="Registration ID" icon={IdCard} value={form.registrationId} onChange={update("registrationId")} placeholder="2021-1-60-003" />
              <div className="grid grid-cols-2 gap-3">
                <FormInput label="Roll No." icon={Hash} value={form.rollNo} onChange={update("rollNo")} placeholder="2021331060003" />
                <FormInput label="Semester" icon={Clock} value={form.semester} onChange={update("semester")} placeholder="8th Semester" />
              </div>
            </SectionCard>
            <SectionCard title="Submission Date">
              <FormInput label="Date" icon={Calendar} value={form.date} onChange={update("date")} placeholder="" type="date" />
            </SectionCard>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)", fontFamily: "'Inter', 'DM Sans', 'Segoe UI', system-ui, sans-serif" }}>

      {/* Header */}
      <header className="px-4 sm:px-6 py-4 sm:py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0"
        style={{ borderBottom: "1px solid rgba(148, 163, 184, 0.15)", backgroundColor: "rgba(30, 41, 59, 0.8)", backdropFilter: "blur(12px)", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.3)" }}>
        <div className="flex items-center gap-3">
          <button onClick={() => setCurrentView("home")} className="p-2 rounded-lg transition-all duration-200 hover:bg-slate-700/50 active:scale-95" title="Back to Home">
            <ArrowLeft size={20} className="text-slate-300" />
          </button>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg blur"></div>
            <img src="/logo.png" alt="Acadify Logo" className="w-10 h-10 rounded-lg relative z-10" style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)" }} />
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-tight text-white">Acadify</h1>
            <p className="text-xs hidden sm:block" style={{ color: "#94a3b8" }}>Academic Document Creator</p>
          </div>
        </div>
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <span className="hidden md:flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full"
            style={{ background: "linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))", border: "1px solid rgba(139, 92, 246, 0.3)", color: "#a78bfa" }}>
            <Sparkles size={10} /> Live Preview
          </span>
          <button onClick={handlePrint} disabled={isPdfGenerating}
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/30 active:scale-95 flex-1 sm:flex-none justify-center disabled:opacity-60 disabled:cursor-not-allowed"
            style={{ background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)", boxShadow: "0 4px 12px rgba(59, 130, 246, 0.3)" }}>
            <Printer size={14} />
            <span className="hidden sm:inline">{isPdfGenerating ? "Generating…" : "Print / Save PDF"}</span>
            <span className="sm:hidden">{isPdfGenerating ? "…" : "Print"}</span>
          </button>
        </div>
      </header>

      {/* Main Split Layout */}
      <div className="flex flex-col lg:flex-row flex-1 overflow-hidden">

        {/* Left: Form Panel */}
        <div className="w-full lg:w-96 lg:flex-shrink-0 overflow-y-auto p-4 sm:p-6 space-y-4"
          style={{ borderRight: "1px solid rgba(148, 163, 184, 0.15)", background: "linear-gradient(180deg, rgba(30, 41, 59, 0.5) 0%, rgba(15, 23, 42, 0.5) 100%)", backdropFilter: "blur(10px)" }}>

          {/* Step Indicator */}
          <div className="flex items-center justify-between mb-6">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center flex-1">
                <div className="flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold transition-all duration-200"
                  style={step <= currentStep
                    ? { background: "linear-gradient(135deg, #3b82f6, #8b5cf6)", color: "#fff", boxShadow: "0 2px 8px rgba(59, 130, 246, 0.4)" }
                    : { background: "rgba(51, 65, 85, 0.5)", color: "#64748b" }
                  }>
                  {step < currentStep ? <CheckCircle size={16} /> : step}
                </div>
                {step < 4 && (
                  <div className="flex-1 h-0.5 mx-2"
                    style={{ background: step < currentStep ? "linear-gradient(90deg, #3b82f6, #8b5cf6)" : "rgba(51, 65, 85, 0.5)" }} />
                )}
              </div>
            ))}
          </div>

          {renderFormStep()}

          {/* Navigation */}
          <div className="flex gap-3 pt-4">
            {currentStep > 1 && (
              <button onClick={() => setCurrentStep((s) => s - 1)}
                className="flex-1 py-3 rounded-lg font-semibold text-sm text-slate-300 transition-all duration-200 hover:bg-slate-700/50 active:scale-95 flex items-center justify-center gap-2"
                style={{ background: "rgba(51, 65, 85, 0.5)", border: "1px solid rgba(100, 116, 139, 0.3)" }}>
                <ArrowLeft size={16} /> Previous
              </button>
            )}
            {currentStep < 4 ? (
              <button onClick={() => setCurrentStep((s) => s + 1)}
                className="flex-1 py-3 rounded-lg font-semibold text-sm text-white transition-all duration-200 hover:shadow-lg active:scale-95 flex items-center justify-center gap-2"
                style={{ background: "linear-gradient(135deg, #3b82f6, #8b5cf6)", boxShadow: "0 4px 12px rgba(59, 130, 246, 0.3)" }}>
                Next <ArrowRight size={16} />
              </button>
            ) : (
              <button onClick={handlePrint} disabled={isPdfGenerating}
                className="flex-1 py-3 rounded-lg font-semibold text-sm text-white transition-all duration-200 hover:shadow-lg active:scale-95 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                style={{ background: "linear-gradient(135deg, #10b981, #059669)", boxShadow: "0 4px 12px rgba(16, 185, 129, 0.3)" }}>
                <Printer size={16} /> {isPdfGenerating ? "Generating…" : "Generate PDF"}
              </button>
            )}
          </div>

          {/* Mobile print button */}
          <button onClick={handlePrint} disabled={isPdfGenerating}
            className="w-full py-3.5 rounded-xl font-semibold text-sm text-white flex items-center justify-center gap-2 transition-all duration-200 active:scale-95 lg:hidden disabled:opacity-60 disabled:cursor-not-allowed"
            style={{ background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)", boxShadow: "0 4px 12px rgba(59, 130, 246, 0.3)" }}>
            <Printer size={16} /> {isPdfGenerating ? "Generating…" : "Save as PDF"}
          </button>
        </div>

        {/* Right: Preview Panel */}
        <div className="flex-1 flex flex-col items-center justify-start overflow-y-auto py-4 sm:py-8 px-4 sm:px-6"
          style={{ background: "radial-gradient(ellipse at top, rgba(59, 130, 246, 0.04) 0%, transparent 50%), linear-gradient(180deg, rgba(15, 23, 42, 0.5) 0%, #0f172a 100%)" }}>

          <div className="flex items-center gap-2.5 mb-4 sm:mb-6 px-4 py-2 rounded-full"
            style={{ background: "rgba(30, 41, 59, 0.5)", border: "1px solid rgba(100, 116, 139, 0.2)", backdropFilter: "blur(8px)" }}>
            <Eye size={14} style={{ color: "#a78bfa" }} />
            <span className="text-xs font-semibold" style={{ color: "#cbd5e1" }}>Live A4 Preview</span>
            <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" style={{ boxShadow: "0 0 8px rgba(167, 139, 250, 0.6)" }} />
          </div>

          <div className="preview-container"
            style={{ boxShadow: "0 20px 60px rgba(0, 0, 0, 0.6), 0 0 40px rgba(59, 130, 246, 0.15)", borderRadius: "4px", border: "1px solid rgba(100, 116, 139, 0.2)" }}>
            <CoverPage data={form} printRef={printRef} />
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=DM+Sans:wght@400;500;600;700&display=swap');
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: rgba(15, 23, 42, 0.5); }
        ::-webkit-scrollbar-thumb { background: linear-gradient(180deg, #3b82f6, #8b5cf6); border-radius: 10px; border: 2px solid rgba(15, 23, 42, 0.5); }
        ::-webkit-scrollbar-thumb:hover { background: linear-gradient(180deg, #60a5fa, #a78bfa); }
        input[type="date"]::-webkit-calendar-picker-indicator { filter: invert(0.7) sepia(1) saturate(2) hue-rotate(200deg); cursor: pointer; }
        button:hover { transform: translateY(-1px); }
        .preview-container { transform: scale(0.7); transform-origin: top center; margin-bottom: -88mm; }
        @media (max-width: 1024px) { .preview-container { transform: scale(0.5); margin-bottom: -148mm; } }
        @media (max-width: 640px)  { .preview-container { transform: scale(0.35); margin-bottom: -192mm; } }
        @media (max-width: 480px)  { .preview-container { transform: scale(0.28); margin-bottom: -213mm; } }

        /* ── Print styles: colour preservation ── */
        @media print {
          * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
        }
      `}</style>
    </div>
  );
}
