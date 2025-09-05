import { useState, useMemo } from 'react'
import { models } from './data/models'

function Dot({ on }) {
  return <span className={`dot ${on ? 'on' : 'off'}`} aria-label={on ? 'yes' : 'no'} />
}

export default function App() {
  const [q, setQ] = useState('')

  const rows = useMemo(() => {
    return models.filter(m =>
      m.name.toLowerCase().includes(q.toLowerCase())
    )
  }, [q])

  return (
    <>
      <div style={{ margin: '16px 0' }}>
        <input
          value={q}
          onChange={e => setQ(e.target.value)}
          placeholder="Search by name"
          style={{
            width: '100%',
            padding: '10px 12px',
            border: '1px solid #d1d5db',
            borderRadius: 8
          }}
        />
      </div>

      <table>
        <thead>
          <tr>
            <th rowSpan="2">Application</th>
            <th colSpan="3">Platforms</th>
            <th colSpan="3">Cost</th>
            <th rowSpan="2">Best</th>
          </tr>
          <tr>
            <th>Android</th><th>iOS</th><th>Web</th>
            <th>Free</th><th>Monthly</th><th>Annual</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(m => (
            <tr key={m.id}>
              <td>{m.name}</td>
              <td><Dot on={m.android === 1} /></td>
              <td><Dot on={m.ios === 1} /></td>
              <td><Dot on={m.web === 1} /></td>
              <td><Dot on={m.free === 1} /></td>
              <td>{m.monthly || '—'}</td>
              <td>{m.annual || '—'}</td>
              <td>{m.best ? 'Best' : '—'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
