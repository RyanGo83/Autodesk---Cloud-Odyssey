export default function ShareButton() {

  const shareApp = async () => {
    if (navigator.share) {
      await navigator.share({
        title: "Autodesk: A Cloudy Odyssey",
        url: window.location.href,
      });
    }
  };

  return (
    <button onClick={shareApp}>
      🚀 Share
    </button>
  );
}
