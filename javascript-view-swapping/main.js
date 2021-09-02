const $tabContainer = document.querySelector('.tab-container');
const tabNodelist = document.querySelectorAll('.tab');
const viewNodelist = document.querySelectorAll('.view');

function handleTabClick({ target }) {
  if (!target.matches('.tab')) {
    return;
  }
  // adds .active to target, removes .active from others
  for (let i = 0; i < tabNodelist.length; i++) {
    const $node = tabNodelist[i];
    // console.log('$node textContent', $node.textContent);
    $node.isEqualNode(target)
      ? $node.classList.add('active')
      : $node.classList.remove('active');
  }

  const targetView = target.getAttribute('data-view');
  for (let i = 0; i < viewNodelist.length; i++) {
    const $node = viewNodelist[i];
    // console.log('$node', $node)
    const view = $node.getAttribute('data-view');
    view === targetView
      ? $node.classList.remove('hidden')
      : $node.classList.add('hidden');
  }
}

$tabContainer.addEventListener('click', e => {
  handleTabClick(e);
});
