export interface ContactMessage {
  name: string
  email: string
  message: string
}

export type SubmitResult =
  | { ok: true }
  | { ok: false; reason: 'not-configured' | 'request-failed' }

/**
 * Form backend endpoint. To go live, create a Formspree form and set:
 *   const FORM_ENDPOINT = 'https://formspree.io/f/<your-form-id>'
 * The UI adapts automatically — while null, the form explains that
 * submission is not configured instead of faking success.
 */
const FORM_ENDPOINT: string | null = null

export const isSubmissionConfigured = FORM_ENDPOINT !== null

export async function submitContactMessage(message: ContactMessage): Promise<SubmitResult> {
  if (!FORM_ENDPOINT) {
    return { ok: false, reason: 'not-configured' }
  }
  try {
    const response = await fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(message),
    })
    return response.ok ? { ok: true } : { ok: false, reason: 'request-failed' }
  } catch {
    return { ok: false, reason: 'request-failed' }
  }
}
