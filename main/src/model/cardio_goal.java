package model;

public class cardio_goal extends Goal{
    // Intensity 1 - 5
    // 1 being least intensive
    // 5 being most intensive
    private int intense;
    private String activity;
    private int calorie_count;

    public cardio_goal() {

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
