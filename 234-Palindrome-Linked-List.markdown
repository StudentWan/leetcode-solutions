#### O(n) Time, O(1) Space

```c++
/*
两个思想：
1. slow+fast，寻找链表中点
2. reverse链表很easy
*/
class Solution {
public:
    bool isPalindrome(ListNode* head) {
        ListNode* slow = head;
        ListNode* fast = head;
        
        while (fast != NULL && fast->next != NULL) {
            slow = slow->next;
            fast = fast->next->next;
        }
        
        if (fast != NULL) {
            slow = slow->next;
        }
        
        slow = reverse(slow);
        fast = head;
        
        while (slow != NULL) {
            if (slow->val != fast->val) {
                return false;
            }
            slow = slow->next;
            fast = fast->next;
        }
        return true;
    }
    
    ListNode* reverse(ListNode* head) {
        ListNode* prev = NULL;
        while (head != NULL) {
            ListNode* next = head->next;
            head->next = prev;
            prev = head;
            head = next;
        }
        return prev;
    }
};
```