package genchev.hristian.automatictestevaluation.comparators;

import org.opencv.core.Point;

import java.util.*;
public class ImageRowComparator implements Comparator<Point>{
    public int compare(Point p1,Point p2){
        if(p1.x == p2.x)
            return 0;
        else if(p1.x > p2.x)
            return 1;
        else
            return -1;
    }
}