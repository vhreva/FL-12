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
  for (let item of structure) {
    let li = document.createElement('li');
    let div = document.createElement('div');
    let icon = document.createElement('i')

    icon.classList.add('material-icons');
    let title = document.createElement('span')

    li.appendChild(div)
    div.appendChild(icon)
    div.appendChild(title)
    title.appendChild(document.createTextNode(item.title))

    if (item.folder) {
      div.classList.toggle('folder')
      icon.innerText = 'folder'
      div.addEventListener('click', function() {
        if (icon.innerText === 'folder') {
          icon.innerText = 'folder_open'
        } else {
          icon.innerText = 'folder'
        }
      });
      if (item.children) {
        drawTree(item.children, li)
      } else {
        let empty = document.createElement('div');
        empty.classList.add('empty');
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
}

drawTree(structure, rootNode)
