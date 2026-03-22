import { useEffect, useState } from 'react'
import type { ActionButtonMessage } from 'god-button-action-button'

const BODIES = [
  'شما نقش جدیدی دریافت کردید.',
  'رای‌گیری تا دو دقیقهٔ دیگر شروع می‌شود.',
  'یک پیام سیستمی: بازی ادامه دارد.',
  'بازیکن جدیدی به میز پیوست.',
  'یادآوری: از بحث خارج از بازی خودداری کنید.'
]

/** Pushes a fake incoming message on a fixed interval (for local testing). */
export function useMockMessages(intervalMs = 15_000) {
  const [messages, setMessages] = useState<ActionButtonMessage[]>([])

  useEffect(() => {
    let seq = 0
    const tick = () => {
      seq += 1
      const body = `${BODIES[(seq - 1) % BODIES.length]} (نمونهٔ ${seq})`
      setMessages((prev) => [
        ...prev,
        {
          id: `mock-${Date.now()}-${seq}`,
          body,
          at: Date.now()
        }
      ])
    }
    const id = window.setInterval(tick, intervalMs)
    return () => clearInterval(id)
  }, [intervalMs])

  return messages
}
