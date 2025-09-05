import { useState, useMemo } from 'react'
import { models } from './data/models'

function Dot({ on }) {
  return <span className={`dot ${on ? 'on' : 'off'}`} aria-label={on ? 'yes' : 'no'} />
}

export default function App() {
  const [q, setQ] = useState('')
  const [filters, setFilters] = useState({
    android: false,
    ios: false,
    web: false,
    free: false,
  })

  const rows = useMemo(() => {
  return models
    .filter(m => m.name.toLowerCase().includes(q.toLowerCase()))
    .filter(m => (filters.android ? m.android === 1 : true))
    .filter(m => (filters.ios     ? m.ios === 1     : true))
    .filter(m => (filters.web     ? m.web === 1     : true))
    .filter(m => (filters.free    ? m.free === 1    : true))
  }, [q, filters])

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
      <div style={{ display: 'flex', gap: 16, margin: '8px 0' }}>
        {['android','ios','web','free'].map(key => (
          <label key={key} style={{ display:'flex', alignItems:'center', gap:6 }}>
            <input
              type="checkbox"
              checked={filters[key]}
              onChange={() => setFilters(f => ({ ...f, [key]: !f[key] }))}
            />
            {key[0].toUpperCase() + key.slice(1)}
          </label>
        ))}
      </div>
      <div style={{ fontSize: 12, color: '#6b7280', margin: '4px 0' }}>
        {rows.length} result{rows.length === 1 ? '' : 's'}
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
