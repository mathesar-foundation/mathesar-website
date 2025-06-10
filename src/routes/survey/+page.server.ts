import { redirect } from "@sveltejs/kit";

const SURVEY_FORM_LINK = "https://forms.gle/yjxiEQr9QzTT5GCSA";

export async function load() {
  redirect(301, SURVEY_FORM_LINK);
}
