#### Hierholzer Algorithm

分析题意，这其实就是一个求有向图的欧拉路径，并且已知该图为欧拉图且起点确定。

关于Hierholzer算法的证明，可以参考wikipedia或者discuss.

```java
class Solution {
    private List<String> path;
    private Map<String, PriorityQueue<String>> flights;
    
    public List<String> findItinerary(List<List<String>> tickets) {
        path = new LinkedList<String>();
        flights = new HashMap<String, PriorityQueue<String>>();
        
        for (List<String> ticket : tickets) {
            flights.computeIfAbsent(ticket.get(0),k -> new PriorityQueue<String>());
            flights.get(ticket.get(0)).add(ticket.get(1));
        }
        
        dfs("JFK");
        
        return path;
    }
    
    private void dfs(String v) {
        PriorityQueue<String> fromV = flights.get(v);
        while (fromV != null && !fromV.isEmpty()) {
            dfs(fromV.poll());
        }
        path.add(0, v);
    }
}
```