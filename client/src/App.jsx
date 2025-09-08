import { useState, useMemo } from 'react'
import { models } from './data/models'
import './styles/main.css'

function Dot({ on }) {
  return <span className={`dot ${on ? 'on' : 'off'}`} aria-label={on ? 'yes' : 'no'} />
}

export default function App() {
  // keep keys lowercase & consistent
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
      .filter(m => (filters.IOS     ? m.IOS === 1     : true))
      .filter(m => (filters.web     ? m.web === 1     : true))
      .filter(m => (filters.free    ? m.free === 1    : true))
  }, [q, filters])

  const toggle = key => setFilters(f => ({ ...f, [key]: !f[key] }))

  return (
    <div className="layout">
      {/* sidebar (vertical filters) */}
      <aside className="sidebar island">
        <h3 className="sidebar-title">Search Filters</h3>

        <div className="filter-group">
          <div className="filter-heading">Platforms</div>
          {['android', 'IOS', 'web'].map(key => (
            <label key={key} className="filter-item">
              <input
                type="checkbox"
                checked={filters[key]}
                onChange={() => toggle(key)}
              />
              <span>{key[0].toUpperCase() + key.slice(1)}</span>
            </label>
          ))}
        </div>

        <div className="filter-group">
          <div className="filter-heading">Cost</div>
          <label className="filter-item">
            <input
              type="checkbox"
              checked={filters.free}
              onChange={() => toggle('free')}
            />
            <span>Free tier</span>
          </label>
        </div>
      </aside>

      {/* main content */}
      <main className="content">
        <div className="island search-island">
          <input
            value={q}
            onChange={e => setQ(e.target.value)}
            placeholder="Search by name"
            className="search-input"
          />
        </div>

        <div className="island table-wrap">
          <table>
            <thead>
              <tr>
                <th rowSpan="2">Application</th>
                <th colSpan="3">Platforms</th>
                <th colSpan="3">Cost</th>
                <th rowSpan="2">Version</th>
              </tr>
              <tr>
                <th>Android</th>
                <th>IOS</th>
                <th>Web</th>
                <th>Free version</th>
                <th>Monthly plan</th>
                <th>Annual plan</th>
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
                  <td><Dot on={m.IOS === 1} /></td>
                  <td><Dot on={m.web === 1} /></td>
                  <td><Dot on={m.free === 1} /></td>
                  <td>{m.monthly || '—'}</td>
                  <td>{m.annual || '—'}</td>
                  <td>{m.version || '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  )
}
