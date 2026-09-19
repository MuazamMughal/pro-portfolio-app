/** Renders one or more JSON-LD nodes as a single @graph, so entities on the
 * same page (and, via @id, across the site) can reference each other instead
 * of being redefined. */
const JsonLd = ({ nodes }: { nodes: object[] }) => {
  const graph = {
    "@context": "https://schema.org",
    "@graph": nodes,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  )
}

export default JsonLd
