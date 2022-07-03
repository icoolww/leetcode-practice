var mergeTwoLists = function(list1, list2) {

  // checking if one of the lists exist
  if (!list1) {
    return list2;
  }
  if (!list2) {
    return list1;
  }

let value1 = list1.val;
let value2 = list2.val;

  let merge;
  // checking condition of line 11 and 12 and merge them
  if (value1 < value2) {
    merge = new ListNode(value1);
    merge.next = mergeTwoLists(list1.next, list2);
  } else {
    merge = new ListNode(value2);
    merge.next = mergeTwoLists(list2.next, list1);
  }
  return merge;
};