type Props = {
  title: string
  children: React.ReactNode
}

export default function Section({ title, children }: Props) {
  return (
    <section className="section">
      <h3>{title}</h3>
      {children}
    </section>
  )
}