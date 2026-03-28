"use client";

import { motion } from "framer-motion";

// ─── 3D Coordinate Axes (relevant to 6D Pose, ROS, 3D CV) ────────────────────
function CoordAxes() {
  return (
    <svg width="96" height="104" viewBox="0 0 96 104" fill="none">
      {/* origin */}
      <circle cx="48" cy="68" r="2.5" fill="currentColor" />
      {/* X axis */}
      <line x1="48" y1="68" x2="88" y2="68" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <polyline points="85,64 91,68 85,72" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinejoin="round" />
      <text x="93" y="72" fontSize="8.5" fill="currentColor" fontFamily="monospace">X</text>
      {/* Y axis */}
      <line x1="48" y1="68" x2="48" y2="14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <polyline points="44,17 48,11 52,17" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinejoin="round" />
      <text x="51" y="10" fontSize="8.5" fill="currentColor" fontFamily="monospace">Y</text>
      {/* Z axis (perspective) */}
      <line x1="48" y1="68" x2="16" y2="96" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <polyline points="19,99 13,101 15,95" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinejoin="round" />
      <text x="6" y="103" fontSize="8.5" fill="currentColor" fontFamily="monospace">Z</text>
    </svg>
  );
}

// ─── Wireframe Bounding Box (6D Pose estimation / object detection) ───────────
function BoundingBox() {
  // front face
  const f = { x: 18, y: 28, w: 54, h: 42 };
  // back face offset
  const o = { dx: -12, dy: -14 };
  return (
    <svg width="84" height="82" viewBox="0 0 84 82" fill="none">
      {/* back face */}
      <rect x={f.x + o.dx} y={f.y + o.dy} width={f.w} height={f.h}
        stroke="currentColor" strokeWidth="1" strokeDasharray="3,2.5" />
      {/* connecting depth edges */}
      {[
        [f.x, f.y], [f.x + f.w, f.y],
        [f.x, f.y + f.h], [f.x + f.w, f.y + f.h],
      ].map(([x, y], i) => (
        <line key={i} x1={x} y1={y} x2={x + o.dx} y2={y + o.dy}
          stroke="currentColor" strokeWidth="1" />
      ))}
      {/* front face */}
      <rect x={f.x} y={f.y} width={f.w} height={f.h}
        stroke="currentColor" strokeWidth="1.3" />
      {/* center cross (pose indicator) */}
      <line x1={f.x + f.w / 2} y1={f.y + 6} x2={f.x + f.w / 2} y2={f.y + f.h - 6}
        stroke="currentColor" strokeWidth="0.8" strokeDasharray="2,2" />
      <line x1={f.x + 6} y1={f.y + f.h / 2} x2={f.x + f.w - 6} y2={f.y + f.h / 2}
        stroke="currentColor" strokeWidth="0.8" strokeDasharray="2,2" />
    </svg>
  );
}

// ─── Point Cloud (3D CV / Gaussian Splatting) ─────────────────────────────────
function PointCloud() {
  const pts = [
    [28, 18, 1.8], [42, 12, 1.4], [55, 20, 2], [68, 15, 1.2],
    [22, 30, 1.5], [38, 28, 2.2], [52, 33, 1.6], [65, 26, 1],
    [30, 42, 1.2], [46, 40, 1.8], [60, 44, 2], [72, 38, 1.4],
    [35, 54, 1], [50, 52, 1.5], [64, 56, 1.2],
  ];
  return (
    <svg width="96" height="70" viewBox="0 0 96 70" fill="none">
      {pts.map(([cx, cy, r], i) => (
        <circle key={i} cx={cx} cy={cy} r={r} fill="currentColor" opacity={0.7 + (i % 3) * 0.1} />
      ))}
    </svg>
  );
}

// ─── LiDAR Fan Scan (Autonomous Driving / SLAM) ───────────────────────────────
function LidarScan() {
  const origin = { x: 50, y: 78 };
  const angles = [30, 47, 62, 75, 90, 105, 118, 133, 150];
  const lengths = [52, 60, 48, 65, 58, 62, 50, 56, 44];

  return (
    <svg width="100" height="82" viewBox="0 0 100 82" fill="none">
      {/* scan rays */}
      {angles.map((deg, i) => {
        const rad = (deg * Math.PI) / 180;
        const len = lengths[i];
        const x2 = origin.x + Math.cos(rad) * len;
        const y2 = origin.y - Math.sin(rad) * len;
        return (
          <line key={i} x1={origin.x} y1={origin.y} x2={x2} y2={y2}
            stroke="currentColor" strokeWidth="0.9"
            opacity={0.5 + 0.05 * i} />
        );
      })}
      {/* detected point dots at ray tips */}
      {angles.map((deg, i) => {
        const rad = (deg * Math.PI) / 180;
        const len = lengths[i];
        return (
          <circle key={i}
            cx={origin.x + Math.cos(rad) * len}
            cy={origin.y - Math.sin(rad) * len}
            r="2" fill="currentColor" opacity="0.9" />
        );
      })}
      {/* arc connecting tips */}
      <path
        d={`M ${origin.x + Math.cos((30 * Math.PI) / 180) * 70} ${origin.y - Math.sin((30 * Math.PI) / 180) * 70}
            A 70 70 0 0 0 ${origin.x + Math.cos((150 * Math.PI) / 180) * 70} ${origin.y - Math.sin((150 * Math.PI) / 180) * 70}`}
        stroke="currentColor" strokeWidth="0.8" fill="none" strokeDasharray="3,3" opacity="0.5"
      />
      {/* origin sensor */}
      <circle cx={origin.x} cy={origin.y} r="3" fill="currentColor" />
    </svg>
  );
}

// ─── Neural Network Graph (Deep Learning / Embodied AI) ───────────────────────
function NeuralGraph() {
  const layers = [
    [{ x: 50, y: 12 }],
    [{ x: 24, y: 42 }, { x: 76, y: 42 }],
    [{ x: 14, y: 76 }, { x: 50, y: 76 }, { x: 86, y: 76 }],
    [{ x: 32, y: 108 }, { x: 68, y: 108 }],
  ];
  const edges: [number, number, number, number][] = [
    // layer 0→1
    [50, 12, 24, 42], [50, 12, 76, 42],
    // layer 1→2
    [24, 42, 14, 76], [24, 42, 50, 76],
    [76, 42, 50, 76], [76, 42, 86, 76],
    // layer 2→3
    [14, 76, 32, 108], [50, 76, 32, 108],
    [50, 76, 68, 108], [86, 76, 68, 108],
  ];

  return (
    <svg width="100" height="122" viewBox="0 0 100 122" fill="none">
      {edges.map(([x1, y1, x2, y2], i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
          stroke="currentColor" strokeWidth="0.9" />
      ))}
      {layers.flat().map(({ x, y }, i) => (
        <circle key={i} cx={x} cy={y} r={i === 0 ? 5 : 4}
          stroke="currentColor" strokeWidth="1.2"
          fill="none" />
      ))}
      {/* highlighted center node */}
      <circle cx="50" cy="76" r="5" fill="currentColor" opacity="0.4" />
    </svg>
  );
}

// ─── ArUco Marker (OpenCV contribution) ──────────────────────────────────────
function ArucoMarker() {
  // simplified 5x5 ArUco-style marker
  const cellSize = 9;
  const offset = 4;
  const pattern = [
    [1, 1, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 1, 0, 1, 1],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1],
  ];
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
      {/* outer border */}
      <rect x="2" y="2" width="60" height="60" stroke="currentColor" strokeWidth="1" rx="2" />
      {/* black border cells */}
      {pattern.map((row, r) =>
        row.map((filled, c) =>
          filled ? (
            <rect key={`${r}-${c}`}
              x={offset + c * cellSize}
              y={offset + r * cellSize}
              width={cellSize - 0.5}
              height={cellSize - 0.5}
              fill="currentColor"
              opacity="0.8"
            />
          ) : null
        )
      )}
      {/* corner detection markers */}
      {[[3, 3], [61, 3], [3, 61], [61, 61]].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="2.5" stroke="currentColor" strokeWidth="1" fill="none" />
      ))}
    </svg>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────
export function BgDecorations() {
  const floatA = { animate: { y: [0, -10, 0] }, transition: { duration: 7, repeat: Infinity, ease: "easeInOut" as const } };
  const floatB = { animate: { y: [0, 8, 0] },  transition: { duration: 9, repeat: Infinity, ease: "easeInOut" as const, delay: 1.5 } };
  const floatC = { animate: { y: [0, -6, 0] }, transition: { duration: 6, repeat: Infinity, ease: "easeInOut" as const, delay: 0.8 } };
  const floatD = { animate: { y: [0, 10, 0] }, transition: { duration: 8, repeat: Infinity, ease: "easeInOut" as const, delay: 2 } };

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: -1 }}
      aria-hidden
    >
      {/* ── LEFT column ── (visible on xl+) */}
      <div className="absolute left-3 top-0 bottom-0 hidden xl:flex flex-col justify-around items-center py-24 gap-8
                      text-blue-500/[0.13] dark:text-blue-300/[0.09]">
        <motion.div {...floatA}><CoordAxes /></motion.div>
        <motion.div {...floatB}><BoundingBox /></motion.div>
        <motion.div {...floatC}><PointCloud /></motion.div>
      </div>

      {/* ── RIGHT column ── (visible on xl+) */}
      <div className="absolute right-3 top-0 bottom-0 hidden xl:flex flex-col justify-around items-center py-24 gap-8
                      text-violet-500/[0.13] dark:text-violet-300/[0.09]">
        <motion.div {...floatC}><LidarScan /></motion.div>
        <motion.div {...floatD}><NeuralGraph /></motion.div>
        <motion.div {...floatA}><ArucoMarker /></motion.div>
      </div>

      {/* ── Subtle gradient blobs (add depth) ── */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full
                      bg-blue-500/[0.025] dark:bg-blue-400/[0.04] blur-3xl" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] rounded-full
                      bg-violet-500/[0.025] dark:bg-violet-400/[0.04] blur-3xl" />
    </div>
  );
}
