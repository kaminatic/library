// const viewer = document.querySelector('spline-viewer');
// const allBlocks = document.querySelectorAll('.book-desc');

// viewer.addEventListener('load', () => {
//   // Only after the scene is ready, start checking the variable
//   setInterval(() => {
//     viewer.getVariable('hoverTarget')
//       .then(val => {
//         allBlocks.forEach(b => b.classList.remove('visible'));
//         if (val && val !== 'none') {
//           const active = document.getElementById(`desc-${val}`);
//           if (active) active.classList.add('visible');
//         }
//       })
//       .catch(err => console.error('[ERROR] Variable not accessible yet:', err));
//   }, 50);
// });



