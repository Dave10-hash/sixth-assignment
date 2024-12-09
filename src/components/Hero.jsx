
const Hero = () => {
  return (
    <section style={styles.hero}>
      <div style={styles.overlay}>
        
      </div>
    </section>
  );
};

const styles = {
  hero: {
    height: '1024px',
    backgroundImage: 'url("https://i.ibb.co/s1TWHXh/New-Project.png")', 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    color: 'white',
  },
  overlay: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
  },
};

export default Hero;