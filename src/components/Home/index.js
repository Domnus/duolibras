import React from 'react';

export default function MainLogin({ history }) {
  const navigateToHeader = () => {
    history.push('/header'); // Change '/header' to the appropriate route path
  };

  return (
    <div style={styles.container}>
      <div style={styles.titulo}>
        <h1 style={styles.header1}>Duolibras</h1>
      </div>
      <button
        style={styles.button}
        onClick={navigateToHeader}
      >
        <span style={{ color: '#fff', fontSize: 20 }}>COMEÇAR</span>
      </button>
      {/* ... */}
    </div>
  );
}

const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      width: '100vw',
      backgroundColor: '#810fcc',
    },
    button: {
      backgroundColor: '#000',
      padding: 10,
      borderRadius: 17,
      width: 150,
      alignItems: 'center',
      margin: 10,
      cursor: 'pointer',
      border: 'none',
    },
    button2: {
      backgroundColor: '#000',
      padding: 10,
      borderRadius: 17,
      width: 150,
      alignItems: 'center',
      cursor: 'pointer',
      border: 'none',
    },
    titulo: {
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
    },
    header1: {
      fontSize: 40,
      color: '#fff',
    },
    header2: {
      fontSize: 20,
      color: '#fff',
    },
  };