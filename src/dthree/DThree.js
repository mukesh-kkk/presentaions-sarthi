import React, { useRef, useState } from "react";
import * as d3 from "d3";
import { zoom } from "d3";
import "./DThree.css";
export const useD3 = (renderChartFn, dependencies) => {
  const ref = React.useRef();

  React.useEffect(() => {
    renderChartFn(d3.select(ref.current));
    return () => {};
  }, dependencies);
  return ref;
};

const BarChart = ({ data }) => {
  const [zoom, setZoom] = useState(1);
  const ref = useD3(
    (svg) => {
      const height = 500 * zoom;
      const width = 500 * zoom;
      const margin = {
        top: 20 * zoom,
        right: 30 * zoom,
        bottom: 30 * zoom,
        left: 40 * zoom,
      };

      const x = d3
        .scaleBand()
        .domain(data.map((d) => d.year))
        .rangeRound([margin.left, width - margin.right])
        .padding(0.1);

      const y1 = d3
        .scaleLinear()
        .domain([0, d3.max(data, (d) => d.sales)])
        .rangeRound([height - margin.bottom, margin.top]);

      const xAxis = (g) =>
        g.attr("transform", `translate(0,${height - margin.bottom})`).call(
          d3
            .axisBottom(x)
            .tickValues(
              d3
                .ticks(...d3.extent(x.domain()), (width / 40) * zoom)
                .filter((v) => x(v) !== undefined)
            )
            .tickSizeOuter(0)
        );

      const y1Axis = (g) =>
        g
          .attr("transform", `translate(${margin.left},0)`)
          .style("color", "steelblue")
          .call(d3.axisLeft(y1).ticks(null, "s"))
          .call((g) => g.select(".domain").remove())
          .call((g) =>
            g
              .append("text")
              .attr("x", -margin.left)
              .attr("y", 10)
              .attr("fill", "currentColor")
              .attr("text-anchor", "start")
              .text(data.y1)
          );

      svg.select(".x-axis").call(xAxis);
      svg.select(".y-axis").call(y1Axis);
      var tooltip = d3
        .select("body")
        .append("div")
        .style("position", "absolute")
        .style("z-index", "10")
        .style("visibility", "hidden")
        .style("background", "#000")
        .text("a simple tooltip")
        .style("color", "white")
        .attr("id", "dhsyd");

      svg
        .select(".plot-area")
        .attr("fill", "steelblue")
        .selectAll(".bar")
        .data(data)
        .join("rect")
        .attr("class", "bar")
        .style("transform-origin", "bottom")
        .attr("data", (d) => d.sales)
        .on("mouseover", function (data, index) {
          tooltip.text(this.getAttribute("data"));
          var bar = d3.select(this);
          var width = bar.attr("width");
          var height = bar.attr("height");

          var scale = 1.5;
           var comp=1-(scale-1)/12;
           console.log(comp,"CIND")
          var newWidth = width * scale;
          var newHeight = height * scale;

          var shift = (newWidth - width) / 2 / 13;
          var shifti = (newWidth - width) / 2;
          var heightShift = newHeight - height;

          bar
            .transition()
            .style(
              "transform",
              "scaleX(" + scale + ") translateX(" + shifti + "px)"
            );

          d3.selectAll(".bar")
            .filter((d, i) => i < index)
            .transition()
            .style("transform", "scaleX("+comp+")");

          d3.selectAll(".bar")
            .filter((d, i) => i > index)
            .transition()
            .style("transform", "scaleX("+comp+")");

          return tooltip.style("visibility", "visible");
        })
        .on("mousemove", function (e) {
          return tooltip
            .style("top", e.pageY - 10 + "px")
            .style("left", e.pageX + 10 + "px");
        })
        .on("mouseout", function () {
          d3.select(this).transition().style("transform", "scale(1)");
          d3.selectAll(".bar")
            .filter((d) => d.letter !== data.letter)
            .transition()
            .style("transform", "translateX(0)");

          return tooltip.style("visibility", "hidden");
        })
        .attr("x", (d) => x(d.year))
        .attr("width", x.bandwidth())

        .attr("y", (d) => y1(d.sales))
        .attr("height", (d) => y1(0) - y1(d.sales));
    },
    [data.length, zoom]
  );

  return (
    <>
      <div style={{ width: `${100}%`, marginLeft: 200 }}>
        {" "}
        <svg
          ref={ref}
          style={{
            height: 500 * zoom,
            width: "100%",
            marginRight: "0px",
            marginLeft: "0px",
          }}
        >
          <g className="plot-area" />
          <g className="x-axis" />
          <g className="y-axis" />
        </svg>
      </div>

      <button
        onClick={(e) => {
          setZoom((prev) => prev + 0.1);
        }}
      >
        +
      </button>

      <button
        onClick={(e) => {
          setZoom((prev) => prev - 0.1);
        }}
      >
        -
      </button>
    </>
  );
};

export { BarChart };
