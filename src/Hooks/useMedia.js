import React from 'react'

const useMedia = (media) => {
  const [match, setMatch] = React.useState(null);

  React.useEffect(() => {
    function mediaMatch() {
      const {matches} = window.matchMedia(media);
      setMatch(matches);
    }

    mediaMatch()

    window.addEventListener('resize', mediaMatch);
    return () => window.removeEventListener('resize', mediaMatch);
  }, [media])

  return match;
}

export default useMedia
