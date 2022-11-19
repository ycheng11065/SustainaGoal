package model;

public class cardioGoal extends Goal{
    // Intensity 1 - 5
    // 1 being least intensive
    // 5 being most intensive
    private int intense;
    private String activity;
    private int calorie_count;

    public cardioGoal() {
        super();
        intense = 0;
        activity = "";
        calorie_count = 0;
    }

    public int getIntense() {
        return intense;
    }

    public String getActivity() {
        return activity;
    }

    public int getCalorie_count() {
        return calorie_count;
    }

    public void setActivity(String activity) {
        this.activity = activity;
    }

    private void set_intensity(int a) {
        this.intense = a;
    }

    public void setCalorie_count(int calorie_count) {
        this.calorie_count = calorie_count;
    }
}
