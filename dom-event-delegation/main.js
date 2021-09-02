const $list = document.querySelector('.task-list');

$list.addEventListener('click', e => {
  // console.log('event.target:', e.target);
  console.log('event.target.tagName:', e.target.tagName);
  // console.dir(e);
  const $target = e.target;

  if ($target.tagName === 'BUTTON') {
    const $closestItem = $target.closest('.task-list-item');
    console.log('closest item', $closestItem);
    $closestItem.remove();
  }
});
