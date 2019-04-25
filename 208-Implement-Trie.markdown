#### Trie树的思想与实现

```js
var TrieNode = function() {
    this.links = new Array(26);
    this.end = false;
}

TrieNode.prototype.containsKey = function(ch) {
    return this.links[ch.charCodeAt() - 97] ? true : false;
}

TrieNode.prototype.get = function(ch) {
    return this.links[ch.charCodeAt() - 97] ? this.links[ch.charCodeAt() - 97] : null;
}

TrieNode.prototype.put = function(ch) {
    this.links[ch.charCodeAt() - 97] = new TrieNode();
}

TrieNode.prototype.isEnd = function() {
    return this.end;
}

TrieNode.prototype.setEnd = function() {
    this.end = true;
}


/**
 * Initialize your data structure here.
 */
var Trie = function() {
    this.root = new TrieNode();
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let node = this.root;
    let ch;
    for (let i = 0; i < word.length; i++) {
        ch = word[i];
        if (!node.containsKey(ch)) {
            node.put(ch);
        }
        node = node.get(ch);
    }
    node.setEnd();
};

Trie.prototype.searchNode = function(word) {
    let node = this.root;
    let ch;
    for (let i = 0; i < word.length; i++) {
        ch = word[i];
        if (node.containsKey(ch)) {
            node = node.get(ch);
        } else {
            return null;
        }
    }
    
    return node;
}

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    const node = this.searchNode(word);
    return node !== null && node.isEnd();
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    const node = this.searchNode(prefix);
    return node !== null;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
```