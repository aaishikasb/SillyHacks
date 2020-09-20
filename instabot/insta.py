
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from time import sleep

driver = webdriver.Chrome(ChromeDriverManager().install())
driver.get("https://instagram.com")
sleep(2)
        #username
driver.find_element_by_class_name('pexuQ').send_keys("devshackathon@gmail.com")
        #Pass
driver.find_element_by_css_selector('#loginForm > div > div:nth-child(2) > div > label > input').send_keys("SillyHacks")
        #Login button click
driver.find_element_by_css_selector('#loginForm > div > div:nth-child(3) > button').click()
sleep(5)


driver.get("https://www.instagram.com/direct/inbox/")
            #if any msg requests (like 1 or 2)
sleep(2)

driver.find_element_by_css_selector("body > div.RnEpo.Yx5HN > div > div > div > div.mt3GC > button.aOOlW.bIiDR").click()


           
y= driver.find_elements_by_class_name("_41V_T")
while len(y)!=0:
        y= driver.find_elements_by_class_name("_41V_T")
        if(len(y)==0):

                    
                break
        else:
                y[0].click()
                msg = driver.find_elements_by_tag_name('span')
                print("Last message in chats "+ msg[len(msg)-1].get_attribute('innerHTML'))
                lastmsg = msg[len(msg)-1].get_attribute('innerHTML')
                        
                    
                if(lastmsg == "Send me an Emoji"):
                        
                        sleep(5)
                        driver.find_element_by_css_selector("body > div.RnEpo.Yx5HN > div > div > div > div.mt3GC > button.aOOlW.HoLwm").click()
                        driver.find_element_by_css_selector("#react-root > section > div > div.Igw0E.IwRSH.eGOV_._4EzTm > div > div > div.DPiy6.Igw0E.IwRSH.eGOV_.vwCYk > div.uueGX > div > div.Igw0E.IwRSH.eGOV_._4EzTm > div > div > div.Igw0E.IwRSH.eGOV_.vwCYk.ItkAi > textarea").send_keys(":))))")
                        sleep(4)
                        driver.find_element_by_css_selector("#react-root > section > div > div.Igw0E.IwRSH.eGOV_._4EzTm > div > div > div.DPiy6.Igw0E.IwRSH.eGOV_.vwCYk > div.uueGX > div > div.Igw0E.IwRSH.eGOV_._4EzTm > div > div > div.Igw0E.IwRSH.eGOV_._4EzTm.JI_ht > button").click()
                        print("Message recieved")


      