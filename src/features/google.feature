Feature: Google Accessibility Test
    Scenario: Test for accessibility violations on Google
        Given Navigate to non-angular page https://google.com
        Then The page should be accessible
