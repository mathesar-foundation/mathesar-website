<script>
  // Sample data for the comparison table based on the provided content
  const comparisonData = {
    competitors: [
      {
        id: "airtable",
        name: "Airtable",
      },
      {
        id: "nocodb",
        name: "NocoDB",
      },
      {
        id: "baserow",
        name: "Baserow",
      },
      {
        id: "mathesar",
        name: "Mathesar",
      },
    ],
    features: [
      {
        id: "open-source",
        name: "Open Source",
      },
      {
        id: "self-hosted",
        name: "Self Hosted",
      },
      {
        id: "spreadsheet-interface",
        name: "Spreadsheet Interface",
      },
      {
        id: "supports-postgres",
        name: "Supports Postgres",
      },
      {
        id: "postgres-permissions",
        name: "Uses Postgres Permissions",
      },
      {
        id: "minimal-metadata",
        name: "Minimal Metadata",
      },
      {
        id: "no-duplicate-data",
        name: "Does not duplicate data",
      },
      {
        id: "unlimited-capacity",
        name: "Unlimited capacity",
      },
      {
        id: "unlimited-users",
        name: "Unlimited users",
      },
    ],
    supportMatrix: {
      "open-source": {
        airtable: { level: "none" },
        nocodb: { level: "full" },
        baserow: { level: "partial", note: "^" },
        mathesar: { level: "full" },
      },
      "self-hosted": {
        airtable: { level: "none" },
        nocodb: { level: "partial", note: "*" },
        baserow: { level: "partial", note: "*" },
        mathesar: { level: "full" },
      },
      "spreadsheet-interface": {
        airtable: { level: "full" },
        nocodb: { level: "full" },
        baserow: { level: "full" },
        mathesar: { level: "full" },
      },
      "supports-postgres": {
        airtable: { level: "none" },
        nocodb: { level: "full" },
        baserow: { level: "full" },
        mathesar: { level: "full" },
      },
      "postgres-permissions": {
        airtable: { level: "none" },
        nocodb: { level: "none" },
        baserow: { level: "none" },
        mathesar: { level: "full" },
      },
      "minimal-metadata": {
        airtable: { level: "none" },
        nocodb: { level: "none" },
        baserow: { level: "none" },
        mathesar: { level: "full" },
      },
      "no-duplicate-data": {
        airtable: { level: "none" },
        nocodb: { level: "full" },
        baserow: { level: "none" },
        mathesar: { level: "full" },
      },
      "unlimited-capacity": {
        airtable: { level: "none" },
        nocodb: { level: "partial", note: "+" },
        baserow: { level: "partial", note: "+" },
        mathesar: { level: "full" },
      },
      "unlimited-users": {
        airtable: { level: "none" },
        nocodb: { level: "partial", note: "+" },
        baserow: { level: "partial", note: "+" },
        mathesar: { level: "full" },
      },
    },
    notes: {
      "*": "optional",
      "^": "only some features are open source",
      "+": "if self hosted",
    },
  };
</script>
