import React from 'react';

/**
 * Pixel-perfect crosshair marker (+) composed of two intersecting 1px lines,
 * matching webus.in's Framer Variant 1 crosshair design.
 */
export function GridCrosshair({ style = {}, className = '', size = 9, color }) {
  return (
    <div
      className={`grid-crosshair ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        ...style,
        ...(color ? { color } : {})
      }}
      aria-hidden="true"
    >
      <span className="cross-v" />
      <span className="cross-h" />
    </div>
  );
}

/**
 * Reusable SectionGrid Component
 * Replicates the 5-line vertical blueprint grid and horizontal boundary lines
 * present across all sections on webus.in.
 * 
 * @param {'light'|'dark'} theme - Grid color mode (light for #e8e8e8 sections, dark for #111111/#171717 sections)
 * @param {boolean} showTopLine - Whether to display the top horizontal boundary line
 * @param {boolean} showBottomLine - Whether to display the bottom horizontal boundary line
 * @param {number[]} crosshairPositions - Array of column indices (0, 1, 2, 3, 4) where '+' marks are rendered
 * @param {Array<{top?: string, bottom?: string, cols?: number[]}>} extraHorizontalLines - Optional inner horizontal lines
 */
export default function SectionGrid({
  theme = 'light',
  showTopLine = true,
  showBottomLine = false,
  crosshairPositions = [0, 4],
  extraHorizontalLines = [],
  className = '',
  style = {}
}) {
  const colPercentages = ['0%', '25%', '50%', '75%', '100%'];

  return (
    <div
      className={`section-grid-backdrop ${theme === 'dark' ? 'grid-dark' : 'grid-light'} ${className}`}
      style={style}
      aria-hidden="true"
    >
      <div className="section-grid-container">
        {/* 5 Vertical Column Guidelines (4 Columns across max-width) */}
        <div className="section-grid-line col-0" style={{ left: '0%' }} />
        <div className="section-grid-line col-1" style={{ left: '25%' }} />
        <div className="section-grid-line col-2" style={{ left: '50%' }} />
        <div className="section-grid-line col-3" style={{ left: '75%' }} />
        <div className="section-grid-line col-4" style={{ left: '100%' }} />

        {/* Top Horizontal Section Boundary Line with '+' Crosshairs */}
        {showTopLine && (
          <div className="section-grid-h-line top">
            {crosshairPositions.map((colIdx) => (
              <GridCrosshair
                key={`top-cross-${colIdx}`}
                style={{ left: colPercentages[colIdx], top: '0px' }}
              />
            ))}
          </div>
        )}

        {/* Optional Inner Horizontal Dividing Lines */}
        {extraHorizontalLines.map((line, idx) => (
          <div
            key={`extra-line-${idx}`}
            className="section-grid-h-line custom"
            style={{
              top: line.top,
              bottom: line.bottom,
              left: line.left || '0%',
              right: line.right || '0%',
              width: line.width || '100%'
            }}
          >
            {(line.cols || [0, 1, 2, 3, 4]).map((colIdx) => (
              <GridCrosshair
                key={`extra-cross-${idx}-${colIdx}`}
                style={{ left: colPercentages[colIdx], top: '0px' }}
              />
            ))}
          </div>
        ))}

        {/* Bottom Horizontal Section Boundary Line with '+' Crosshairs */}
        {showBottomLine && (
          <div className="section-grid-h-line bottom">
            {crosshairPositions.map((colIdx) => (
              <GridCrosshair
                key={`bot-cross-${colIdx}`}
                style={{ left: colPercentages[colIdx], top: '0px' }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
