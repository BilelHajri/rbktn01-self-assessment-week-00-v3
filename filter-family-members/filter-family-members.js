// `filterFamilyMembers` accepts two arguments, a family tree object, and a truth test. `filterFamilyMembers`
// returns an array, in any order, of the full names of family members who pass the passed in truth test.
// You will need to use recursion in your solution in order to handle nested family trees.
//
// A family member looks like this:
//
// {
//   firstName: 'Fred'
//   lastName: 'Zirdung'
//   location: 'San Francsico'
//   children: [/* ... */]
// }
//
// EXAMPLE:
//
// var familyTree = {
//   'firstName': 'Beth',
//   'lastName': 'Johnson',
//   'location': 'San Francisco',
//   'children': [ // 2 element
//     {
//       'firstName': 'Beth Jr.',
//       'lastName': 'Johnson',
//       'location': 'Berkeley',
//       'children': [
//         {
//           'firstName': 'Smitty',
//           'lastName': 'Won',
//           'location': 'Beijing',
//           'children': []
//         }
//       ]
//     },
//     {
//       'firstName': 'Joshie',
//       'lastName': 'Wyattson',
//       'location': 'Berkeley',
//       'children': []
//     }
//   ]
// };
//
// var livesInBerkeley = function (familyMember) {
//   return familyMember.location === 'Berkeley';
// }
//
// filterFamilyMembers(familyTree, livesInBerkeley)
//
// returns ['Beth Jr. Johnson', 'Joshie Wyattson'];



var filterFamilyMembers = function (familyTree, truthTest) {
  // All your code in this function body
  var result = [] || result;

  if (livesInBerkeley(familyTree.location)) {
    result.push(familyTree.firstName +'.' +familyTree.lastName)
  }

  if (familyTree.children[0] !== undefined) {

    familyTree.children.forEach(function (el) {

        filterFamilyMembers(el,truthTest,result)

    })

  /* result.push(familyTree.children[0].firstName +'.' +familyTree.children[0].lastName) */

  }

  return result;
};


//function return arr of famliy memebre from tree

