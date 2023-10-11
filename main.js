const getBannerData = async () => {
  const response = await fetch('https://cdn.jsdelivr.net/gh/arthurproc/styled-banners-twitch-extension/banner-info-example.json');
  const data = await response.json();
  return data;
};


const loadBanner = async () => {
  const data = await getBannerData();
  const wrapper = document.querySelector('.banner-wrapper');
  const title = document.querySelector('.banner-title');
  const description = document.querySelector('.banner-description');
  const imageWrapper = document.querySelector('.banner-image-wrapper');


  title.innerText = data.title;
  description.innerText = data.description;
  const img = document.createElement('img');
  img.src = data.image;
  imageWrapper.appendChild(img);

  if (data.cta) {
    const cta = document.createElement('a');
    cta.href = data.cta.link;
    cta.innerText = data.cta.text;
    wrapper.appendChild(cta);
  }

  if (data.cssFile) {
    console.log('css file');
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.id   = 'banner-custom-stylesheet';
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = data.cssFile;
    link.media = 'all';
    head.appendChild(link);
  }
}

loadBanner();
