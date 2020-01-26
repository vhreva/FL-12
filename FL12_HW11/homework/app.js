const structure = [
    {
      'folder': true,
      'title': 'Films',
      'children': [
        {
          'title': 'Iron Man.avi'
        },
        {
          'folder': true,
          'title': 'Fantasy',
          'children': [
            {
              'title': 'The Lord of the Rings.avi'
            },
            {
              'folder': true,
              'title': 'New folder 1',
              'children': false
            }
          ]
        }
      ]
    },
    {
      'folder': true,
      'title': 'Documents',
      'children': [
        {
          'folder': true,
          'title': 'EPAM Homework answers',
          'children': null
        }
      ]
    }
];

const rootNode = document.getElementById('root');

function drawTree(structure, elem) {
  let ul = document.createElement('ul');
  ul.classList.add('close')

  for (let item of structure) {
    let li = document.createElement('li');
    let div = document.createElement('div');
    let icon = document.createElement('i')
    let title = document.createElement('span')

    icon.classList.add('material-icons');
    li.appendChild(div)
    div.appendChild(icon)
    div.appendChild(title)
    title.appendChild(document.createTextNode(item.title))

    if (item.folder) {
      div.classList.toggle('folder')
      icon.innerText = 'folder'
      div.addEventListener('click', function() {
        if (event.target.nextSibling.classList.contains('close')) {
            event.target.nextSibling.classList.remove('close');
            event.target.nextSibling.classList.toggle('open');
            icon.innerText = 'folder_open'
        } else {
            event.target.nextSibling.classList.remove('open');
            event.target.nextSibling.classList.toggle('close');
            icon.innerText = 'folder'
        }
      });
      if (item.children) {
        drawTree(item.children, li)
      } else {
        let empty = document.createElement('div');
        empty.classList.add('empty', 'close');
        empty.innerText = 'Folder is empty';
        li.appendChild(empty);
      }
    } else {
      div.classList.toggle('file')
      icon.innerHTML = 'insert_drive_file'
    }
    ul.appendChild(li)
  }
  elem.appendChild(ul)
  if (ul.parentNode === rootNode) {
    ul.classList.toggle('open')
  }
}

drawTree(structure, rootNode)
