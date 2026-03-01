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
      {/* Double-line border */}
      <div
        style={{
          position: "absolute",
          inset: "8mm",
          border: "2.5px solid #001B2E",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: "11mm",
          border: "1px solid #1F9688",
          pointerEvents: "none",
        }}
      />

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
            borderWidth: pos.includes("top") ? "2px 0 0 2px" : "0 2px 2px 0",
            top: pos.includes("top") ? "14mm" : "auto",
            bottom: pos.includes("bottom") ? "14mm" : "auto",
            left: pos.includes("left") ? "14mm" : "auto",
            right: pos.includes("right") ? "14mm" : "auto",
            borderTopRightRadius: pos === "top-right" ? "3px" : undefined,
            borderBottomLeftRadius: pos === "bottom-left" ? "3px" : undefined,
            borderTopLeftRadius: pos === "top-left" ? "3px" : undefined,
            borderBottomRightRadius: pos === "bottom-right" ? "3px" : undefined,
          }}
        />
      ))}

      {/* Content wrapper */}
      <div
        style={{
          width: "100%",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "6mm",
        }}
      >
        {/* University Header */}
        <div style={{ textAlign: "center", marginBottom: "6mm" }}>
          {/* NEUB Logo */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "4mm",
            }}
          >
            <img
              src="/NEUB%20Logo.png"
              alt="NEUB Logo"
              style={{ width: "90px", height: "90px" }}
            />
          </div>

          <h1
            style={{
              fontSize: "22px",
              fontWeight: "bold",
              letterSpacing: "2px",
              color: "#001B2E",
              marginBottom: "3px",
              textTransform: "uppercase",
              fontFamily: "'Georgia', serif",
            }}
          >
            North East University Bangladesh
          </h1>
          <div
            style={{
              width: "60%",
              margin: "0 auto 4px",
              height: "1px",
              background:
                "linear-gradient(to right, transparent, #1F9688, transparent)",
            }}
          />
          <p
            style={{
              fontSize: "13px",
              color: "#1F9688",
              letterSpacing: "1px",
              fontFamily: "Arial, sans-serif",
              fontWeight: "600",
            }}
          >
            {data.departmentName ||
              "Department of Computer Science & Engineering"}
          </p>
        </div>

        {/* Decorative divider */}
        <div
          style={{
            width: "80%",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "8mm",
          }}
        >
          <div style={{ flex: 1, height: "1px", backgroundColor: "#99D5D5" }} />
          <div
            style={{
              width: "6px",
              height: "6px",
              background: "#1F9688",
              transform: "rotate(45deg)",
            }}
          />
          <div style={{ flex: 1, height: "1px", backgroundColor: "#99D5D5" }} />
        </div>

        {/* Doc Type Badge */}
        <div
          style={{
            border: "2px solid #001B2E",
            padding: "6px 28px",
            marginBottom: "7mm",
            letterSpacing: "6px",
            fontSize: "18px",
            fontWeight: "bold",
            textTransform: "uppercase",
            color: "#001B2E",
            fontFamily: "'Georgia', serif",
          }}
        >
          {data.docType}
        </div>

        {/* ON Section */}
        <div style={{ textAlign: "center", marginBottom: "7mm", width: "85%" }}>
          <p
            style={{
              fontSize: "11px",
              letterSpacing: "3px",
              color: "#555",
              textTransform: "uppercase",
              fontFamily: "Arial, sans-serif",
              marginBottom: "4px",
            }}
          >
            ON
          </p>
          <h2
            style={{
              fontSize: "15px",
              fontWeight: "bold",
              color: "#001B2E",
              fontFamily: "'Georgia', serif",
              lineHeight: "1.5",
              borderBottom: "1px dashed #99D5D5",
              paddingBottom: "6px",
            }}
          >
            &ldquo;{data.assignmentTopic || "Topic Not Specified"}&rdquo;
          </h2>
        </div>

        {/* Course Info */}
        <div
          style={{
            width: "85%",
            backgroundColor: "#f7fafa",
            border: "1px solid #99D5D5",
            borderRadius: "4px",
            padding: "8px 14px",
            marginBottom: "8mm",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: "12px",
              fontFamily: "Arial, sans-serif",
              color: "#333",
              marginBottom: "3px",
            }}
          >
            <strong style={{ color: "#001B2E" }}>Course Code:</strong>{" "}
            {data.courseCode || "CSE-XXX"}
            <span style={{ margin: "0 10px", color: "#99D5D5" }}>|</span>
            <strong style={{ color: "#001B2E" }}>Course Title:</strong>{" "}
            {data.courseTitle || "Not Specified"}
          </p>
        </div>

        {/* Submitted To / By Grid */}
        <div
          style={{
            width: "85%",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "6mm",
            marginBottom: "8mm",
          }}
        >
          {/* Submitted To */}
          <div
            style={{
              border: "1px solid #001B2E",
              borderRadius: "3px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                backgroundColor: "#001B2E",
                padding: "5px 10px",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  color: "#99D5D5",
                  fontSize: "9px",
                  letterSpacing: "2px",
                  fontFamily: "Arial, sans-serif",
                  textTransform: "uppercase",
                  margin: 0,
                }}
              >
                Submitted To
              </p>
            </div>
            <div
              style={{ padding: "8px 12px", fontFamily: "Arial, sans-serif" }}
            >
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: "bold",
                  color: "#001B2E",
                  marginBottom: "3px",
                }}
              >
                {data.teacherName || "Teacher Name"}
              </p>
              <p
                style={{
                  fontSize: "10px",
                  color: "#1F9688",
                  fontStyle: "italic",
                }}
              >
                {data.teacherDesignation || "Designation"}
              </p>
              <p style={{ fontSize: "10px", color: "#555", marginTop: "2px" }}>
                Dept. of{" "}
                {data.departmentName?.replace("Department of ", "") || "CSE"}
              </p>
              <p style={{ fontSize: "10px", color: "#555" }}>
                North East University Bangladesh
              </p>
            </div>
          </div>

          {/* Submitted By */}
          <div
            style={{
              border: "1px solid #001B2E",
              borderRadius: "3px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                backgroundColor: "#001B2E",
                padding: "5px 10px",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  color: "#99D5D5",
                  fontSize: "9px",
                  letterSpacing: "2px",
                  fontFamily: "Arial, sans-serif",
                  textTransform: "uppercase",
                  margin: 0,
                }}
              >
                Submitted By
              </p>
            </div>
            <div
              style={{ padding: "8px 12px", fontFamily: "Arial, sans-serif" }}
            >
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: "bold",
                  color: "#001B2E",
                  marginBottom: "3px",
                }}
              >
                {data.studentName || "Student Name"}
              </p>
              <p
                style={{ fontSize: "10px", color: "#555", marginBottom: "2px" }}
              >
                <strong>ID:</strong> {data.registrationId || "XXXX-XX-XXXX"}
              </p>
              <p
                style={{ fontSize: "10px", color: "#555", marginBottom: "2px" }}
              >
                <strong>Roll:</strong> {data.rollNo || "XXXX"}
              </p>
              <p style={{ fontSize: "10px", color: "#555" }}>
                <strong>Semester:</strong> {data.semester || "Xth Semester"}
              </p>
            </div>
          </div>
        </div>

        {/* Spacer */}
        <div style={{ flex: 1 }} />

        {/* Footer date */}
        <div
          style={{
            width: "85%",
            borderTop: "1.5px solid #001B2E",
            paddingTop: "5mm",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
            }}
          >
            <div
              style={{ height: "1px", flex: 1, backgroundColor: "#99D5D5" }}
            />
            <p
              style={{
                fontSize: "11px",
                fontFamily: "Arial, sans-serif",
                letterSpacing: "2px",
                color: "#001B2E",
                fontWeight: "bold",
              }}
            >
              DATE: {formattedDate}
            </p>
            <div
              style={{ height: "1px", flex: 1, backgroundColor: "#99D5D5" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Input Component ───────────────────────────────────────────────────────────
function FormInput({
  label,
  icon: Icon,
  value,
  onChange,
  placeholder,
  type = "text",
}) {
  return (
    <div className="space-y-1">
      <label
        className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest"
        style={{ color: "#99D5D5" }}
      >
        <Icon size={11} />
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-3 py-2 rounded-lg text-sm outline-none transition-all duration-200 placeholder-slate-500"
        style={{
          backgroundColor: "rgba(31, 150, 136, 0.07)",
          border: "1px solid rgba(153, 213, 213, 0.15)",
          color: "#e2f4f4",
          fontFamily: "inherit",
        }}
        onFocus={(e) => {
          e.currentTarget.style.borderColor = "rgba(31, 150, 136, 0.6)";
          e.currentTarget.style.boxShadow = "0 0 0 3px rgba(31, 150, 136, 0.1)";
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = "rgba(153, 213, 213, 0.15)";
          e.currentTarget.style.boxShadow = "none";
        }}
      />
    </div>
  );
}

// ─── Section Card Component ────────────────────────────────────────────────────
function SectionCard({ title, gradient, children }) {
  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(153, 213, 213, 0.1)",
        backdropFilter: "blur(12px)",
      }}
    >
      <div className={`px-4 py-2.5 ${gradient}`}>
        <p className="text-xs font-bold uppercase tracking-widest text-white/90">
          {title}
        </p>
      </div>
      <div className="p-4 space-y-3">{children}</div>
    </div>
  );
}

// ─── Main Page ─────────────────────────────────────────────────────────────────
export default function Page() {
  const printRef = useRef(null);
  const [form, setForm] = useState({
    docType: "ASSIGNMENT",
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

  const update = useCallback(
    (key) => (val) => {
      setForm((p) => ({ ...p, [key]: val }));
    },
    [],
  );

  const handlePrint = () => {
    const printContent = document.getElementById("cover-page-print");
    if (!printContent) return;
    const win = window.open("", "_blank", "width=900,height=700");
    if (!win) return;
    win.document.write(`
      <html><head><title>Cover Page - NEUB</title>
      <style>
        @page { size: A4; margin: 0; }
        body { margin: 0; padding: 0; }
        * { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      </style></head>
      <body>${printContent.outerHTML}</body></html>
    `);
    win.document.close();
    win.focus();
    setTimeout(() => {
      win.print();
      win.close();
    }, 500);
  };

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background:
          "linear-gradient(135deg, #000d1a 0%, #001B2E 50%, #012840 100%)",
        fontFamily: "'DM Sans', 'Segoe UI', system-ui, sans-serif",
      }}
    >
      {/* Header */}
      <header
        className="px-6 py-4 flex items-center justify-between"
        style={{ borderBottom: "1px solid rgba(153, 213, 213, 0.1)" }}
      >
        <div className="flex items-center gap-3">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #1F9688, #0a6b5e)" }}
          >
            <BookOpen size={16} className="text-white" />
          </div>
          <div>
            <h1 className="text-sm font-bold tracking-wide text-white">
              NEUB Cover Page Generator
            </h1>
            <p className="text-xs" style={{ color: "#99D5D5" }}>
              Academic Document Creator
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span
            className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full"
            style={{
              background: "rgba(31,150,136,0.15)",
              border: "1px solid rgba(31,150,136,0.3)",
              color: "#1F9688",
            }}
          >
            <Sparkles size={10} /> Live Preview
          </span>
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 active:scale-95"
            style={{ background: "linear-gradient(135deg, #1F9688, #0a6b5e)" }}
          >
            <Printer size={14} /> Print / Save PDF
          </button>
        </div>
      </header>

      {/* Main Split Layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* ── Left: Form Panel ─────────────────────────────────── */}
        <div
          className="w-96 flex-shrink-0 overflow-y-auto p-5 space-y-4"
          style={{ borderRight: "1px solid rgba(153, 213, 213, 0.08)" }}
        >
          {/* Doc Type Toggle */}
          <SectionCard
            title="Document Type"
            gradient="bg-gradient-to-r from-emerald-700 to-teal-600"
          >
            <div className="grid grid-cols-2 gap-2">
              {["ASSIGNMENT", "LAB REPORT"].map((type) => (
                <button
                  key={type}
                  onClick={() => update("docType")(type)}
                  className="py-2.5 rounded-lg text-xs font-bold uppercase tracking-widest transition-all duration-200"
                  style={
                    form.docType === type
                      ? {
                          background:
                            "linear-gradient(135deg, #1F9688, #0a6b5e)",
                          color: "#fff",
                          border: "1px solid #1F9688",
                          boxShadow: "0 0 16px rgba(31,150,136,0.3)",
                        }
                      : {
                          background: "rgba(31,150,136,0.07)",
                          color: "#99D5D5",
                          border: "1px solid rgba(153,213,213,0.15)",
                        }
                  }
                >
                  {type === "ASSIGNMENT" ? (
                    <>
                      <FileText size={12} className="inline mr-1" />
                      Assignment
                    </>
                  ) : (
                    <>
                      <FlaskConical size={12} className="inline mr-1" />
                      Lab Report
                    </>
                  )}
                </button>
              ))}
            </div>
          </SectionCard>

          {/* University Info */}
          <SectionCard
            title="University & Department"
            gradient="bg-gradient-to-r from-blue-700 to-indigo-600"
          >
            <FormInput
              label="Department Name"
              icon={Building2}
              value={form.departmentName}
              onChange={update("departmentName")}
              placeholder="Dept. of Computer Science & Engineering"
            />
          </SectionCard>

          {/* Course Info */}
          <SectionCard
            title="Course Information"
            gradient="bg-gradient-to-r from-violet-700 to-purple-600"
          >
            <div className="grid grid-cols-2 gap-3">
              <FormInput
                label="Course Code"
                icon={Hash}
                value={form.courseCode}
                onChange={update("courseCode")}
                placeholder="CSE-463"
              />
              <FormInput
                label="Course Title"
                icon={Tag}
                value={form.courseTitle}
                onChange={update("courseTitle")}
                placeholder="Machine Learning"
              />
            </div>
            <FormInput
              label="Assignment Topic"
              icon={Award}
              value={form.assignmentTopic}
              onChange={update("assignmentTopic")}
              placeholder="Decision Tree Algorithm"
            />
          </SectionCard>

          {/* Submitted To */}
          <SectionCard
            title="Submitted To"
            gradient="bg-gradient-to-r from-orange-700 to-amber-600"
          >
            <FormInput
              label="Teacher Name"
              icon={GraduationCap}
              value={form.teacherName}
              onChange={update("teacherName")}
              placeholder="Dr. Mohammad Rafiqul Islam"
            />
            <FormInput
              label="Designation"
              icon={Award}
              value={form.teacherDesignation}
              onChange={update("teacherDesignation")}
              placeholder="Head & Associate Professor"
            />
          </SectionCard>

          {/* Submitted By */}
          <SectionCard
            title="Submitted By"
            gradient="bg-gradient-to-r from-rose-700 to-pink-600"
          >
            <FormInput
              label="Student Name"
              icon={User}
              value={form.studentName}
              onChange={update("studentName")}
              placeholder="Md. Rakib Hassan"
            />
            <div className="grid grid-cols-2 gap-3">
              <FormInput
                label="Registration ID"
                icon={IdCard}
                value={form.registrationId}
                onChange={update("registrationId")}
                placeholder="2021-1-60-003"
              />
              <FormInput
                label="Roll No."
                icon={Hash}
                value={form.rollNo}
                onChange={update("rollNo")}
                placeholder="2021331060003"
              />
            </div>
            <FormInput
              label="Semester"
              icon={Clock}
              value={form.semester}
              onChange={update("semester")}
              placeholder="8th Semester"
            />
          </SectionCard>

          {/* Date */}
          <SectionCard
            title="Submission Date"
            gradient="bg-gradient-to-r from-slate-600 to-slate-500"
          >
            <FormInput
              label="Date"
              icon={Calendar}
              value={form.date}
              onChange={update("date")}
              placeholder=""
              type="date"
            />
          </SectionCard>

          {/* Print Button bottom */}
          <button
            onClick={handlePrint}
            className="w-full py-3 rounded-xl font-bold text-sm text-white tracking-widest uppercase flex items-center justify-center gap-2 transition-all duration-200 hover:opacity-90 active:scale-95"
            style={{
              background: "linear-gradient(135deg, #1F9688 0%, #0a6b5e 100%)",
              boxShadow: "0 4px 20px rgba(31,150,136,0.3)",
            }}
          >
            <Printer size={16} /> Generate & Print PDF
          </button>
        </div>

        {/* ── Right: Preview Panel ──────────────────────────────── */}
        <div
          className="flex-1 flex flex-col items-center justify-start overflow-y-auto py-8 px-6"
          style={{
            background:
              "radial-gradient(ellipse at top, rgba(31,150,136,0.04) 0%, transparent 70%)",
          }}
        >
          {/* Preview label */}
          <div className="flex items-center gap-2 mb-6">
            <Eye size={14} style={{ color: "#1F9688" }} />
            <span
              className="text-xs font-bold uppercase tracking-widest"
              style={{ color: "#99D5D5" }}
            >
              Live A4 Preview
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          </div>

          {/* A4 Paper Shadow */}
          <div
            style={{
              boxShadow:
                "0 20px 60px rgba(0,0,0,0.6), 0 2px 8px rgba(0,0,0,0.4)",
              borderRadius: "2px",
              transform: "scale(0.7)",
              transformOrigin: "top center",
              marginBottom: "-88mm",
            }}
          >
            <CoverPage data={form} printRef={printRef} />
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: rgba(0,27,46,0.5); }
        ::-webkit-scrollbar-thumb { background: rgba(31,150,136,0.4); border-radius: 10px; }
        input[type="date"]::-webkit-calendar-picker-indicator { filter: invert(0.7) sepia(1) saturate(2) hue-rotate(140deg); cursor: pointer; }
      `}</style>
    </div>
  );
}
