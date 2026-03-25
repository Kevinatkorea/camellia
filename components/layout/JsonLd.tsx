import { JsonLdScript, organizationSchema } from "@/lib/schemas";

export default function JsonLd() {
  return <JsonLdScript data={organizationSchema} />;
}
