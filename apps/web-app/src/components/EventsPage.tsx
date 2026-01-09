import React, { useState } from 'react';
import { TextWithIcon } from '@benevolon/design-system';
import { Card } from '@benevolon/design-system';
import { Icon } from '@benevolon/design-system';
import { events } from '../data/events';
import './EventsPage.css';

const EventsPage: React.FC = () => {
  const [search, setSearch] = useState('');
  const [city, setCity] = useState('Toutes les villes');
  const [date, setDate] = useState('');

  const cities = ['Toutes les villes', 'Paris', 'Lyon', 'Francfort', 'Nice', 'Marseille'];

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(search.toLowerCase()) || event.description.toLowerCase().includes(search.toLowerCase());
    const matchesCity = city === 'Toutes les villes' || event.city === city;
    const matchesDate = !date || event.date === date;
    return matchesSearch && matchesCity && matchesDate;
  });

  const getIconForType = (type: string) => {
    switch (type) {
      case 'Festival': return 'Music';
      case 'Sport': return 'Activity';
      case 'Charité': return 'Heart';
      case 'Culture': return 'BookOpen';
      case 'Environnement': return 'Leaf';
      case 'Art': return 'Palette';
      default: return 'Calendar';
    }
  };

  return (
    <div className="events-page">
      <header className="events-header">
        <TextWithIcon
          text="Evénements"
          icon="ArrowLeft"
          iconPosition="left"
          textSize="lg"
          className="events-back"
        />
      </header>

      <div className="events-search">
        <div className="search-input-container">
          <Icon name="Search" size={20} className="search-icon" />
          <input
            type="text"
            placeholder="Rechercher"
            value={search}
            onChange={(e: { target: { value: any; }; }) => setSearch(e.target.value)}
            className="search-input"
          />
        </div>
      </div>

      <div className="events-filters">
        <select value={city} onChange={(e) => setCity(e.target.value)} className="events-select">
          {cities.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="events-date"
          placeholder="Dates"
        />
      </div>

      <h4 className="events-count">{filteredEvents.length} événements</h4>

      <div className="events-list">
        {filteredEvents.map(event => (
          <Card
            key={event.id}
            title={event.title}
            icon={getIconForType(event.type)}
            date={event.date}
            city={event.city}
            location={event.location}
          />
        ))}
      </div>
    </div>
  );
};

export default EventsPage;