import sanitizeHtml from "sanitize-html";

export default function SanitisedHtml({ center, html, ...rest }) {
  const cleanHtml = sanitizeHtml(html, {
    allowedTags: [
      "b",
      "i",
      "em",
      "strong",
      "a",
      "p",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "ol",
      "ul",
      "li",
      "br",
      "iframe",
      "img",
      "blockquote",
    ],
    allowedAttributes: {
      a: ["href", "name", "target", "class", "rel"],
      iframe: ["width", "height", "src"],
      img: ["src", "alt", "title"],
    },
    transformTags: {
      a: sanitizeHtml.simpleTransform("a", {
        class: "sanitised-anchor",
        target: "_blank",
      }),
    },
  });

  return (
    <div
      className="sanitised-html"
      style={{ textAlign: center ? "center" : "left" }}
      {...rest}
      dangerouslySetInnerHTML={{ __html: cleanHtml }}
    />
  );
}
