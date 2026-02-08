document.addEventListener('DOMContentLoaded', function() {
    const galleryContainer = document.getElementById('photo-gallery');
    const baseUrl = `https://storage.googleapis.com/nectarband.net/photos/`;

    // List of image filenames
    const imageFilenames = [
        '720-1.jpg', '720-2.jpg', 'aaron-720-1.jpg', 'b-key-1.jpg', 'jen-710-1.jpg',
        'john-720-1.jpg', 'pat-720-1.jpg', 'aaron-720-2.jpg', 'brent-720-1.jpg', 'brent-720-2.jpg',
        'jen-720-2.jpg', 'john-side-1.jpg', 'pat-720-2.jpg', 'aaron-720-3.jpg', 'brent-720-3.jpg',
        '20240330_201500.jpg', '20240330_201517.jpg', '20240330_202653.jpg', '20240330_203939.jpg',
        '20240330_204138.jpg', '20240707_154138.jpg', '20240706_201053.jpg', '20250118_201810.jpg',
        'crowd1.jpg', 'crowd2.jpg', '20250118_201920.jpg', '20250118_212759.jpg', '20250118_213010.jpg',
        '20250118_210016.jpg', '20250118_201730.jpg', '20250118_213020.jpg', '20240330_222128.jpg',
        '20240330_202315.jpg', '20250118_200705.jpg', '20240831_200310.jpg', '20240707_153038.jpg',
        '20250118_211024.jpg', '20250118_211036.jpg', '20250118_211133.jpg', '20250118_200753.jpg',
        '20250720_135300.jpg', '20250720_135543.jpg', '20250720_135629.jpg', '20250720_140046.jpg',
        '20250720_140520.jpg', '20250720_140911.jpg', '20250720_141112.jpg', '20250720_141113.jpg',
        '20250720_141545.jpg', '20250809_182154.jpg', '20250809_204126.jpg', '20250809_204142.jpg',
        '20250809_204258.jpg', '20250809_204552.jpg', 'FB_IMG_1754704977700.jpg', 'Snapchat-1290052334.jpg',
        'Snapchat-1414772162.jpg', 'Snapchat-182143483.jpg', 'Snapchat-1969869664.jpg', 'Snapchat-733744427.jpg',
        'Snapchat-745185832.jpg', 'Snapchat-840866467.jpg'
    ];

    // Create modal for large image view with navigation arrows
    const modal = document.createElement('div');
    modal.id = 'photo-modal';
    Object.assign(modal.style, {
        display: 'none',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'rgba(0,0,0,0.85)',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000
    });

    // Arrow styles
    const arrowStyle = {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        fontSize: '3em',
        color: '#fff',
        background: 'rgba(0,0,0,0.3)',
        border: 'none',
        borderRadius: '50%',
        width: '60px',
        height: '60px',
        cursor: 'pointer',
        zIndex: 1100,
        userSelect: 'none',
        outline: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'background 0.2s'
    };

    const leftArrow = document.createElement('button');
    leftArrow.innerHTML = '&#8592;';
    Object.assign(leftArrow.style, arrowStyle, { left: '30px' });

    const rightArrow = document.createElement('button');
    rightArrow.innerHTML = '&#8594;';
    Object.assign(rightArrow.style, arrowStyle, { right: '30px' });

    const modalImg = document.createElement('img');
    Object.assign(modalImg.style, {
        maxWidth: '90vw',
        maxHeight: '90vh',
        border: '6px solid #fff',
        borderRadius: '8px',
        boxShadow: '0 0 24px #000',
        zIndex: 1050
    });

    modal.appendChild(leftArrow);
    modal.appendChild(modalImg);
    modal.appendChild(rightArrow);
    document.body.appendChild(modal);

    let currentIndex = 0;

    // Show thumbnails
    imageFilenames.forEach((filename, idx) => {
        const img = document.createElement('img');
        img.src = baseUrl + filename;
        img.alt = `Photo: ${filename}`;
        img.style.width = '120px';
        img.style.height = '90px';
        img.style.objectFit = 'cover';
        img.style.margin = '8px';
        img.style.cursor = 'pointer';
        img.style.border = '2px solid #ccc';
        img.style.borderRadius = '4px';
        img.addEventListener('click', (e) => {
            e.stopPropagation();
            currentIndex = idx;
            showModalImage();
        });
        galleryContainer.appendChild(img);
    });

    function showModalImage() {
        modal.style.display = 'flex';
        modalImg.src = baseUrl + imageFilenames[currentIndex];
    }

    // Arrow navigation
    leftArrow.addEventListener('click', (e) => {
        e.stopPropagation();
        currentIndex = (currentIndex - 1 + imageFilenames.length) % imageFilenames.length;
        showModalImage();
    });
    rightArrow.addEventListener('click', (e) => {
        e.stopPropagation();
        currentIndex = (currentIndex + 1) % imageFilenames.length;
        showModalImage();
    });

    // Hide modal on click (but not when clicking arrows or image)
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            modalImg.src = '';
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (modal.style.display === 'flex') {
            if (e.key === 'ArrowLeft') {
                currentIndex = (currentIndex - 1 + imageFilenames.length) % imageFilenames.length;
                showModalImage();
            } else if (e.key === 'ArrowRight') {
                currentIndex = (currentIndex + 1) % imageFilenames.length;
                showModalImage();
            } else if (e.key === 'Escape') {
                modal.style.display = 'none';
                modalImg.src = '';
            }
        }
    });
});
