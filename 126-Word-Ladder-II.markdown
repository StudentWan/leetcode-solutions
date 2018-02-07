### 题目描述

#### 126. Word Ladder II

Given two words (beginWord and endWord), and a dictionary's word list, find all shortest transformation sequence(s) from beginWord to endWord, such that:

    1. Only one letter can be changed at a time

    2. Each transformed word must exist in the word list. Note that beginWord is not a transformed word.

For example,

Given:

beginWord = `"hit"`

endWord = `"cog"`

wordList = `["hot","dot","dog","lot","log","cog"]`

Return

    [
        ["hit","hot","dot","dog","cog"],
        ["hit","hot","lot","log","cog"]
    ]

Note:

    > Return an empty list if there is no such transformation sequence.
    > All words have the same length.
    > All words contain only lowercase alphabetic characters.
    > You may assume no duplicates in the word list.
    > You may assume beginWord and endWord are non-empty and are not the same.

### 代码及思路

#### 我的代码及思路：

```java
    /*
    运用了深搜的思想，采用回溯来解题，不过TLE了。
    */
    public List<List<String>> findLadders(String beginWord, String endWord, List<String> wordList) {
        List<List<String>> ladders = new ArrayList<List<String>>();
        List<String> ladder = new ArrayList<String>();
        ladder.add(beginWord);
        findLadder(beginWord, endWord, ladder, ladders, wordList);
        int len;
        if (ladders.size() == 0) return ladders;
        else len = ladders.get(0).size();
        for (int i = 0; i < ladders.size(); i++) {
            if (len > ladders.get(i).size()) len = ladders.get(i).size();
        }
        for (int i = 0; i < ladders.size(); i++) {
            if (ladders.get(i).size() > len) {
                ladders.remove(i);
                i--;
            }
        }
        return ladders;
    }
    
    public void findLadder(String beginWord, String endWord, List<String> ladder, List<List<String>> ladders, List<String> wordList) {
        for (int i = 0; i < wordList.size(); i++) {
            if (compare(beginWord, wordList.get(i))) {
                if (wordList.get(i).equals(endWord)) {
                    ladder.add(endWord);
                    ladders.add(ladder);
                    return ;
                }
                
                String newBegin = wordList.get(i);
                List<String> newWordList = new ArrayList<String>(wordList);
                newWordList.remove(i);
                List<String> newLadder = new ArrayList<String>(ladder);
                newLadder.add(newBegin);
                findLadder(newBegin, endWord, newLadder, ladders, newWordList);
            }
        }

    }
    
    public boolean compare(String a, String b) {
        int diff = 0;
        for (int i = 0; i < a.length(); i++) {
            if (a.charAt(i) != b.charAt(i)) diff++;
        }
        if (diff == 1) return true;
        else return false;
    }
```

#### 学到的代码及思路：

```java
    /*
    本算法结合了BFS和DFS。

    先用BFS构造了图，以及从start到end中间各点的邻接点以及从start开始的最小距离。

    同时也确定了到达end的最小距离，削减了DFS时的时间开销。

    然后用DFS对图进行搜索，得到最短路径的列表。
    */
    public List<List<String>> findLadders(String start, String end, List<String> wordList) {
        // Just means wordList, but as a set
        HashSet<String> dict = new HashSet<String>(wordList);
        List<List<String>> res = new ArrayList<List<String>>();
        HashMap<String, ArrayList<String>> nodeNeighbors = new HashMap<String, ArrayList<String>>(); // Neighbor for every node
        HashMap<String, Integer> distance = new HashMap<String, Integer>();// Distance of every node from the start node
        ArrayList<String> solution = new ArrayList<String>();
        dict.add(start);
        bfs(start, end, dict, nodeNeighbors, distance);
        dfs(start, end, dict, nodeNeighbors, distance, solution, res);
        return res;
    }
    
    // BFS: Trace every node's distance from the start node (level by level).
    private void bfs(String start, String end, Set<String> dict, HashMap<String, ArrayList<String>> nodeNeighbors, HashMap<String, Integer> distance) {
        for (String str : dict) {
            nodeNeighbors.put(str, new ArrayList<String>());
        }
        
        Queue<String> queue = new LinkedList<String>();
        queue.offer(start);
        distance.put(start, 0);
        
        while (!queue.isEmpty()) {
            int count = queue.size();
            boolean foundEnd = false;
            for (int i = 0; i < count; i++) {
                String cur = queue.poll();
                int curDistance = distance.get(cur);
                ArrayList<String> neighbors = getNeighbors(cur, dict);
                
                for (String neighbor : neighbors) {
                    nodeNeighbors.get(cur).add(neighbor);
                    if (!distance.containsKey(neighbor)) { //Check if visited
                        distance.put(neighbor, curDistance + 1);
                        if (end.equals(neighbor))
                            foundEnd = true;
                        else
                            queue.offer(neighbor);
                    }
                }
            }
            
            if (foundEnd)
                break;
        }
    }
    
    // Find all next level nodes
    private ArrayList<String> getNeighbors(String node, Set<String> dict) {
        ArrayList<String> res = new ArrayList<String>();
        char chs[] = node.toCharArray();
        
        for (char ch = 'a'; ch <= 'z'; ch++) {
            for (int i = 0; i < chs.length; i++) {
                if (chs[i] == ch) continue;
                char old_ch = chs[i];
                chs[i] = ch;
                if (dict.contains(String.valueOf(chs))) {
                    res.add(String.valueOf(chs));
                }
                chs[i] = old_ch;
            }
        }
        return res;
    }
    
    // DFS: output all paths with the shortest distance
    private void dfs(String cur, String end, Set<String> dict, HashMap<String, ArrayList<String>> nodeNeighbors, HashMap<String, Integer> distance, ArrayList<String> solution, List<List<String>> res) {
        solution.add(cur);
        if (end.equals(cur)) {
            res.add(new ArrayList<String>(solution));
        }
        else {
            for (String next : nodeNeighbors.get(cur)) {
                if (distance.get(next) == distance.get(cur) + 1) {
                    dfs(next, end, dict, nodeNeighbors, distance, solution, res);
                }
            }
        }
        solution.remove(solution.size() - 1);
    }
```