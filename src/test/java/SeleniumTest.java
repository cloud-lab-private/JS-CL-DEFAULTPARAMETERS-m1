import java.io.File;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.PageLoadStrategy;

import io.github.bonigarcia.wdm.WebDriverManager;

public class SeleniumTest{

    private WebDriver webDriver;
    private String path;

    @BeforeAll
    static void setupClass() {
        WebDriverManager.edgedriver().setup();

    }

    @BeforeEach
    public void setUp() {
        // Set up ChromeDriver path
        System.setProperty("webdriver.chrome.driver", "driver/chromedriver");

        // Get file
        File file = new File("src/main/java/index.html");
        path = "file://" + file.getAbsolutePath();

        // Create a new ChromeDriver instance
        ChromeOptions options = new ChromeOptions();
        options.addArguments("headless");
        options.setPageLoadStrategy(PageLoadStrategy.EAGER);
        webDriver = new ChromeDriver(options);

        // Open the HTML file
        webDriver.get(path);
    }

    @AfterEach
    public void tearDown() {
        // Close the browser
        webDriver.quit();
    }

    

    @Test
    public void calculateTaxed() {
        
        webDriver.get(path);

        JavascriptExecutor jsExecutor = (JavascriptExecutor) webDriver;
        Object actual = jsExecutor.executeScript("return calculateTaxed(arguments[0]);", 3600);
        String expected = "540";

        if (actual == null) {
            Assertions.fail("check your parameters.");
        }

        Assertions.assertEquals(expected, actual.toString());
    }

    

    @Test
    public void calculateExpenses() {
        
        webDriver.get(path);

        JavascriptExecutor jsExecutor = (JavascriptExecutor) webDriver;
        Object actual = jsExecutor.executeScript("return calculateExpenses(arguments[0]);", 2500);
        String expected = "1250";

        if (actual == null) {
            Assertions.fail("check your parameters.");

        }
        Assertions.assertEquals(expected, actual.toString());
    }

    

    @Test
    public void calculateSaved() {
       
        webDriver.get(path);

        JavascriptExecutor jsExecutor = (JavascriptExecutor) webDriver;
        Object actual = jsExecutor.executeScript("return calculateSaved(arguments[0]);", 5000);
        String expected = "1000";

        if (actual == null) {
            Assertions.fail("check your parameters.");

        }
        Assertions.assertEquals(expected, actual.toString());
    }

}


