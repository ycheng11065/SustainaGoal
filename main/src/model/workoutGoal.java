package model;
import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Set;

public class workoutGoal extends Goal{
    private HashMap<String, ArrayList> workout = new HashMap<>();
    private int calorie_count;

    public HashMap<String, ArrayList> getWorkout() {
        return workout;
    }

    public int getCalorie_count() {
        return calorie_count;
    }

    public void setWorkout(HashMap<String, ArrayList> workout) {
        this.workout = workout;
    }

    public void setCalorie_count(int calorie_count) {
        this.calorie_count = calorie_count;
    }
}
