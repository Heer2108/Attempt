import React from 'react';

const FinanceSection: React.FC = () => {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        {/* Headline */}
        <h1 style={styles.heading}>Got MONEY on your MIND?</h1>

        {/* Subheadline */}
        <p style={styles.text}>
          ProReckon Solutions has your back! Whether you're a business or an individual, we ensure your finances are in check and your growth is on track.
        </p>
      </div>
    </section>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  section: {
    backgroundColor: '#FFF',
    padding: '60px 20px 40px', // Reduced bottom padding
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '0', // Ensures there's no additional margin at the bottom
  },
  container: {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '30px', // Reduced padding to make it tighter
    backgroundColor: '#F7F7FF',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    fontSize: '2.5rem',
    color: '#333',
    marginBottom: '20px',
    fontWeight: 'bold',
  },
  text: {
    fontSize: '1.2rem',
    color: '#555',
    marginBottom: '10px', // Reduced bottom margin for the paragraph
  },
};

export default FinanceSection;
