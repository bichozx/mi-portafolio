//import { sendEmail } from "../../infrastructure/services/email.service";

import { sendEmail } from '../../infrastructure/service/email.service';

/**
 * sendMessage caso de uso
 * @param {object} payload {name, email, message}
 */
export async function sendMessage(payload) {
  if (!payload?.email || !payload?.message) {
    throw new Error("Faltan campos obligatorios");
  }
  const res = await sendEmail(payload);
  return res;
}
