import { useState, useMemo } from 'react'
import { models } from './data/models'
import './styles/main.css'

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

  const toggle = key => setFilters(f => ({ ...f, [key]: !f[key] }))

  return (
    <>
      {/* search box */}
      <div className="search-bar">
        <input
          value={q}
          onChange={e => setQ(e.target.value)}
          placeholder="Search by name"
          className="search-input"
        />
      </div>

      {/* filter bar */}
      <div className="filter-bar">
        {['android', 'ios', 'web', 'free'].map(key => (
          <label key={key} className="filter-label">
            <input
              type="checkbox"
              checked={filters[key]}
              onChange={() => toggle(key)}
            />
            {key[0].toUpperCase() + key.slice(1)}
          </label>
        ))}
      </div>

      {/* results count */}
      <div className="results-count">
        {rows.length} result{rows.length === 1 ? '' : 's'}
      </div>

      {/* data table */}
      <table>
        <thead>
          <tr>
            <th rowSpan="2">Application</th>
            <th colSpan="3">Platforms</th>
            <th colSpan="3">Cost</th>
            <th rowSpan="2">Best</th>
          </tr>
          <tr>
            <th>Android</th>
            <th>iOS</th>
            <th>Web</th>
            <th>Free</th>
            <th>Monthly</th>
            <th>Annual</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(m => (
            <tr key={m.id}>
              <td>
                <div className="app-cell">
                  <div className="app-title">{m.name}</div>
                  <div className="app-desc">{m.desc}</div>
                </div>
              </td>
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
