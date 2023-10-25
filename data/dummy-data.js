import Food from "../models/foods";
import Activity from "../models/activitys";

export const FOODS = [
    new Food("กระจับต้ม 70 กรัม", 80),
    new Food("กระทงทอง ไส้ไก่ ซอสขาว 3 ชิ้น", 280),
    new Food("กระทงทองไส้ข้าวโพด 3 ชิ้น", 215),
    new Food("กระท้อนทรงเครื่อง 1 ผล", 205),
    new Food("กระยาสารท 1x3 นิ้ว", 210),
    new Food("กระเพาะปลา 1 ชาม", 150),
    new Food("กระเพาะปลาตุ๋นน้ำแดง 1 ถ้วย", 225),
    new Food("กล้วยคลุกมะพร้าว 1 ถ้วย", 100),
    new Food("กล้วยฉาบ 9 ชิ้น", 200),
    new Food("กล้วยตาก 1/2 ผล", 60),
    new Food("กล้วยต้มจิ้มมะพร้าว 1 จาน(2ผล)", 180),
    new Food("กล้วยน้ำว้า 1 ผล", 60),
    new Food("กล้วยน้ำว้าปิ้ง 1 ผล", 90),
    new Food("กล้วยบวชชี 1 ถ้วย", 230),
    new Food("กล้วยปิ้งชุบกะทิ 1 ผล", 145),
    new Food("กล้วยหอม 1 ผล", 120),
    new Food("กล้วยเล็บมือนาง 2 ผล", 60),
    new Food("กล้วยแขก 3 ชิ้น", 255),
    new Food("กล้วยไข่ 1 ผล", 60),
    new Food("กล้วยไข่เชื่อม 1 จาน(2ผล)", 177),
    new Food("กะละแม 3 ห่อเล็ก", 195),
    new Food("กะหรี่พัฟ 2 ชิ้น", 380),
    new Food("กาแฟร้อน 1 แก้ว", 55),
    new Food("กาแฟเย็น 1 แก้ว", 115),
    new Food("กุนเชียงทอด 1 คู่เล็ก", 240),
    new Food("กุ่ยช่าย(นึ่ง) 1 อัน", 140),
    new Food("กุ้งทอดกระเทียมพริกไทย 3 ตัวกลาง", 259),
    new Food("กุ้งนางนึ่งนมสด 1 ถ้วย", 185),
    new Food("กุ้งผัดพริกอ่อน 1 จาน", 235),
    new Food("กุ้งอบวุ้นเส้น 1 จาน", 300),
    new Food("ก๋วยจั๊บ 1 ชาม", 240),
    new Food("ก๋วยจั๊บญวณ 1 ถ้วย", 235),
    new Food("ก๋วยเตี๋ยวคั่วไก่ 1 จาน", 435),
    new Food("ก๋วยเตี๋ยวต้มยำกุ้ง 1 ถ้วย", 320),
    new Food("ก๋วยเตี๋ยวผัดกระเพราไก่ 1 จาน", 440),
    new Food("ก๋วยเตี๋ยวผัดไทยกุ้งสดใส่ไข่ 1 จาน", 545),
    new Food("ก๋วยเตี๋ยวราดหน้าปลากระพง 1 จาน", 435),
    new Food("ก๋วยเตี๋ยวหลอด 1 จาน", 225),
    new Food("ก๋วยเตี๋ยวเนื้อสับ 1 จาน", 370),
    new Food("ก๋วยเตี๋ยวเนื้อเรียง 1 ถ้วย", 370),
    new Food("ก๋วยเตี๋ยวเรือน้ำตกน้ำ 1 ถ้วย", 180),
    new Food("ก๋วยเตี๋ยวเรือน้ำตกแห้ง 1 ถ้วย", 225),
    new Food("ก๋วยเตี๋ยวเส้นปลา น้ำ 1 ชาม", 375),
    new Food("ก๋วยเตี๋ยวเส้นปลา แห้ง 1 ชาม", 420),
    new Food("ก๋วยเตี๋ยวเส้นเล็กต้มยำหมู 1 ชาม", 335),
    new Food("ก๋วยเตี๋ยวเส้นเล็กหมูแห้ง 1 ชาม", 330),
    new Food("ก๋วยเตี๋ยวเส้นใหญ่ผัดซีอิ๊วใส่ไข่ 1 จาน", 520),
    new Food("ก๋วยเตี๋ยวเส้นใหญ่ราดหน้าหมู 1 จาน", 405),
    new Food("ก๋วยเตี๋ยวแขก 1 ถ้วย", 380),
    new Food("ขนมกรวย 3 กรวย", 190),
    new Food("ขนมกล้วย 2 ห่อ", 240),
    new Food("ขนมขี้หนู 1 ถ้วย", 165),
    new Food("ขนมครก 2 คู่", 210),
    new Food("ขนมจีน (50 กรัม) 1 จับ", 50),
    new Food("ขนมจีน 2 ทัพพี", 160),
    new Food("ขนมจีนซาวน้ำ 1 จาน", 320),
    new Food("ขนมจีนน้ำพริก 1 จาน", 450),
    new Food("ขนมจีนน้ำยา 1 จาน", 375),
    new Food("ขนมจีนน้ำเงี้ยว 1 ถ้วย", 305),
    new Food("ขนมจีบ 3 ลูก", 120),
    new Food("ขนมชั้น 2 ชิ้น", 184),
    new Food("ขนมตาล 2 กระทง", 115),
    new Food("ขนมต้มขาว 4 ลูก", 165),
    new Food("ขนมถั่วแปป 1 จาน 3ตัว (110 กรัม)", 432),
    new Food("ขนมถ้วย 2 ถ้วย", 265),
    new Food("ขนมน้ำดอกไม้ 1 จาน(9ชิ้น)", 190),
    new Food("ขนมบ้าบิ่น 1 ชิ้น", 130),
    new Food("ขนมปลากริมไข่เต่า 1 ถ้วย", 250),
    new Food("ขนมปังกระเทียม 2 ชิ้น", 170),
    new Food("ขนมปังขาไก่ 1 ชิ้น", 65),
    new Food("ขนมปังน้ำสลัดหมูหยอง 1 ชิ้น", 230),
    new Food("ขนมปังปอนด์ 1 แผ่น", 80),
    new Food("ขนมปังมะพร้าว 1 ชิ้น", 235),
    new Food("ขนมปังสังขยา 1 ชิ้น", 230),
    new Food("ขนมปังอบกรอบ 4 แผ่นเล็ก", 80),
    new Food("ขนมปังฮาวายเอี้ยน 1 ชิ้น", 300),
    new Food("ขนมปังไส้กรอก 1 ชิ้น", 130),
    new Food("ขนมปังไส้หมูหยอง 1 ชิ้น", 185),
    new Food("ขนมปังไส้ไก่ 1 ชิ้น", 223),
    new Food("ขนมฝักบัว 2 ชิ้น", 140),
    new Food("ขนมสอดไส้ 3 ห่อเล็ก", 380),
    new Food("ขนมหม้อแกง 1 ชิ้น", 179),
    new Food("ขนมหัวผักกาดผัด 1 จาน", 560),
    new Food("ขนมหัวผักกาดผัด ใส่ไข่ 1 จาน", 630),
    new Food("ขนมเข่ง 1 กระทง", 120),
    new Food("ขนมเทียน 2 อัน", 205),
    new Food("ขนมเบื้องญวณ 1 แผ่น", 280),
    new Food("ขนมเบื้องไทยไส้หวาน 1 แผ่น", 60),
    new Food("ขนมเบื้องไทยไส้เค็ม 1 แผ่น", 50),
    new Food("ขนมเปียกปูน 1 ชิ้น", 95),
    new Food("ขนมเปี๊ยะไส้ถั่ว 2 ชิ้น", 300),
    new Food("ขนมเล็บมือนาง 1 จานเล็ก", 27),
    new Food("ขนมไหว้พระจันทร์ไส้ทุเรียนกวน 1 ชิ้น", 340),
    new Food("ขนมไหว้พระจันทร์ไส้ลูกบัว-ไข่เค็ม 1 ชิ้น", 375),
    new Food("ขนุน 2 ยวง", 60),
    new Food("ข้าว สตูว์ไก่ 1 จาน", 465),
    new Food("ข้าวกุ้งทอดกระเทียมพริกไทย 1 จาน", 495),
    new Food("ข้าวขาหมู 1 จาน", 690),
    new Food("ข้าวคลุกกะปิ 1 จาน", 410),
    new Food("ข้าวซอยไก่, หมู 1 ถ้วย", 395),
    new Food("ข้าวญี่ปุ่น 3 ช้อนโต๊ะ 70 กรัม 1 ทัพพี", 118),
    new Food("ข้าวตังหน้าตั้ง 3 ชิ้น", 280),
    new Food("ข้าวตังหมูหยอง 2 แผ่น", 160),
    new Food("ข้าวต้ม(ข้าวกล้อง) 1 ถ้วย", 120),
    new Food("ข้าวต้ม(ข้าวขาว) 1 ถ้วย", 120),
    new Food("ข้าวต้มมัด 1 มัด", 285),
    new Food("ข้าวปุ้น (ส้มตำ - ขนมจีน) 1 จาน", 180),
    new Food("ข้าวผัดกระเพรากุ้ง 1 จาน", 540),
    new Food("ข้าวผัดกระเพราหมู 1 จาน", 580),
    new Food("ข้าวผัดกระเพราไก่ไข่ดาว 1 จาน", 630),
    new Food("ข้าวผัดกุนเชียง 1 จาน", 590),
    new Food("ข้าวผัดกุ้งใส่ไข่ 1 จาน", 595),
    new Food("ข้าวผัดคะน้าหมูกรอบ 1 จาน", 670),
    new Food("ข้าวผัดต้มยำทะเลแห้ง 1 จาน", 400),
    new Food("ข้าวผัดน้ำพริกกุ้งสด 1 จาน", 460),
    new Food("ข้าวผัดน้ำพริกลงเรือ 1 จาน", 605),
    new Food("ข้าวผัดปลาหมึกน้ำพริกเผา 1 จาน", 535),
    new Food("ข้าวผัดปลาเค็ม 1 จาน", 405),
    new Food("ข้าวผัดปูใส่ไข่ 1 จาน", 610),
    new Food("ข้าวผัดผักกระเฉดหมูกรอบ 1 จาน", 600),
    new Food("ข้าวผัดมันกุ้งใส่ไข่ 1 จาน", 575),
    new Food("ข้าวผัดสับปะรด 1 จาน", 335),
    new Food("ข้าวผัดหนำเลียบ-หมู-ไข่ 1 จาน", 370),
    new Food("ข้าวผัดหมูน้ำพริกเผา 1 จาน", 665),
    new Food("ข้าวผัดหมูใส่ไข่ 1 จาน", 660),
    new Food("ข้าวผัดอเมริกัน 1 จาน", 790),
    new Food("ข้าวผัดแกงเขียวหวานไก่ 1 จาน", 630),
    new Food("ข้าวผัดแหนม 1 จาน", 610),
    new Food("ข้าวผัดไส้กรอก 1 จาน", 520),
    new Food("ข้าวมันส้มตำ เนื้อผัดหวาน 1 จาน", 590),
    new Food("ข้าวมันไก่ 1 จาน", 585),
    new Food("ข้าวมันไก่ทอด 1 จาน", 695),
    new Food("ข้าวยำปักษ์ใต้ 1 จาน", 180),
    new Food("ข้าวราดหน้าไก่ 1 จาน", 400),
    new Food("ข้าวสวย(ข้าวกล้อง) 3 ทัพพี", 240),
    new Food("ข้าวสวย(ข้าวขาว) 3 ทัพพี", 240),
    new Food("ข้าวหน้ากุ้งผัดพริดสด 1 จาน", 540),
    new Food("ข้าวหน้าเป็ด 1 จาน", 495),
    new Food("ข้าวหมกไก่ 1 จาน", 540),
    new Food("ข้าวหมูกระเทียม 1 จาน", 525),
    new Food("ข้าวหมูแดง 1 จาน", 560),
    new Food("ข้าวหลาม 1 กระบอก", 230),
    new Food("ข้าวอบเผือก 1 จาน", 385),
    new Food("ข้าวเกรียบกุ้ง 3 แผ่น", 110),
    new Food("ข้าวเกรียบปากหม้อ 4 ชิ้น", 205),
    new Food("ข้าวเม่าทอด 2 ลูก", 418),
    new Food("ข้าวเหนียวกะทิทุเรียน 1 ถ้วย", 225),
    new Food("ข้าวเหนียวดำเปียก 1 ถ้วย", 205),
    new Food("ข้าวเหนียวตัด 1 ชิ้น", 210),
    new Food("ข้าวเหนียวนึ่ง 1-2 ทัพพี (35 กรัม)", 80),
    new Food("ข้าวเหนียวมูลน้ำกะทิ 1 ชิ้นเล็ก", 197),
    new Food("ข้าวเหนียวสังขยา 1 ห่อ", 370),
    new Food("ข้าวเหนียวหน้ากุ้ง 1 ห่อ", 179),
    new Food("ข้าวเหนียวหมูทอด 1 ชุด", 440),
    new Food("ข้าวเหนียวหมูสวรรค์ 1 ชุด", 480),
    new Food("ข้าวแช่ 1 ชุด", 350),
    new Food("ข้าวแตน (ข้าวพองราดน้ำตาล) 1 แผ่น", 150),
    new Food("ข้าวโพดคลุก 1 จานเล็ก", 156),
    new Food("ข้าวโพดคั่ว (เคลือบน้ำตาล) 1 ถ้วย", 60),
    new Food("ข้าวโพดต้ม 1 ฝักเล็ก", 200),
    new Food("ข้าวโอ๊ตสุก 1 ถ้วยตวง", 130),
    new Food("ข้าวไก่อบ 1 จาน", 490),
    new Food("ข้าวไข่เจียว 1 จาน", 445),
    new Food("ครองแครง 22 ตัว", 425),
    new Food("ครองแครงกะทิ 1 ถ้วย", 250),
    new Food("ครีมซุปไก่ 1 ถ้วย", 160),
    new Food("ครีมเทียม 1 ช้อนชา", 45),
    new Food("ครีมโรล 1 ชิ้น", 360),
    new Food("คอร์นเฟลค 1 ถ้วยตวง", 110),
    new Food("คอหมูย่าง 1 จาน", 200),
    new Food("คะน้าหมูกรอบ 1 จาน", 420),
    new Food("คัสตาร์ดน้ำตาลไหม้ 1 ชิ้น", 230),
    new Food("คุ้กกี้ข้าวโอ๊ต 2 ชิ้น", 150),
    new Food("คุ้กกี้ชาเขียว 1 ชิ้น", 150),
    new Food("คุ้กกี้ช็อคโกแลตชิพ 2 ชิ้น", 235),
    new Food("คุ้กกี้สิงคโปร์ 2 ชิ้น", 190),
    new Food("คุ้กกี้เนย 2 ชิ้น", 210),
    new Food("คุ้กกี้ไส้สับปะรด 1 ชิ้น", 190),
    new Food("งาขาว 100 กรัม", 628),
    new Food("งาดำ 100 กรัม", 593),
    new Food("จาวตาลเชื่อม 1 ลูก", 190),
    new Food("ชมพู่ 2-3 ผล", 60),
    new Food("ชมพู่เมืองเพชร 2 ผล", 60),
    new Food("ชาดำเย็น 1 แก้ว", 110),
    new Food("ชามะนาว 1 แก้ว", 100),
    new Food("ชาร้อน 1 แก้ว", 55),
    new Food("ชาเขียว (รสหวาน) 1 แก้ว", 120),
    new Food("ชาเย็น 1 แก้ว", 100),
    new Food("ชิฟฟอนกาแฟ 1 ชิ้น", 275),
    new Food("ชิฟฟอนคัสตาร์ดเค้ก 1 ชิ้น", 340),
    new Food("ช็อคโกแลต 1 ชิ้นพอคำ", 170),
    new Food("ช็อคโกแลตร้อน 1 แก้ว", 120),
    new Food("ช็อคโกแลตเย็น 1 แก้ว", 120),
    new Food("ซาลาเปาไส้หมู 1 ลูก", 120),
    new Food("ซุปข้าวโพด 1 ถ้วย", 140),
    new Food("ซุปหน่อไม้ 1 จาน", 98),
    new Food("ซุปใส (ผัก) 1 ถ้วย", 15),
    new Food("ซ่าหริ่ม 1 ถ้วย", 275),
    new Food("ตะโก้แห้ว 3 กระทงเล็ก", 235),
    new Food("ตับไก่ปิ้ง 1 ไม้", 60),
    new Food("ต้มกะทิสายบัว ปลาทูนึ่ง 1 ถ้วย", 225),
    new Food("ต้มข่าไก่ 1 ถ้วย", 210),
    new Food("ต้มจับฉ่าย 1 ถ้วย", 180),
    new Food("ต้มตือฮวน 1 ถ้วย", 160),
    new Food("ต้มผักกาดดอง ซี่โครงหมู 1 ถ้วย", 90),
    new Food("ต้มยำกุ้ง 1 ถ้วย", 65),
    new Food("ต้มยำปลากระป๋อง 1 ถ้วย", 55),
    new Food("ต้มยำปลากระพง 1 ถ้วย", 80),
    new Food("ต้มยำเห็ดสด 1 ถ้วย", 30),
    new Food("ต้มยำไก่-ใส่เห็ด 1 ถ้วย", 80),
    new Food("ต้มส้มปลาทู 1 ถ้วย", 130),
    new Food("ต้มหัวผักกาดขาว ซี่โครงหมู 1 ถ้วย", 90),
    new Food("ต้มเลือดหมู", 120),
    new Food("ต้มโคล้งปลากรอบ 1 ถ้วย", 60),
    new Food("ต้มโคล้งไก่ย่าง 1 ถ้วย", 115),
    new Food("ถั่วดำดิบ 100 กรัม", 332),
    new Food("ถั่วลิสงดิบ 100 กรัม", 530),
    new Food("ถั่วลิสงต้ม 1 ช้อนโต๊ะ", 45),
    new Food("ถั่วลิสงแผ่นทอด 1 แผ่น", 150),
    new Food("ถั่วเขียวดิบ 100 กรัม", 329),
    new Food("ถั่วเขียวต้มน้ำตาล 1 ถ้วย", 160),
    new Food("ถั่วเหลืองดิบ 100 กรัม", 411),
    new Food("ถั่วแขก 100 กรัม", 366),
    new Food("ถั่วแดงดิบ 100 กรัม", 315),
    new Food("ถั่วแระต้ม 1 ช้อนโต๊ะ", 25),
    new Food("ทองม้วน 3 อันเล็ก", 105),
    new Food("ทองหยิบ 2 ดอก", 210),
    new Food("ทอดมันกุ้ง 1 จาน", 255),
    new Food("ทอดมันปลากราย 1 ชิ้น", 230),
    new Food("ทับทิมกรอบ 1 ถ้วย", 250),
    new Food("ทุเรียนกระดุม 100 กรัม", 129),
    new Food("ทุเรียนกวน 100 กรัม", 340),
    new Food("ทุเรียนชะนี 100 กรัม", 165),
    new Food("ทุเรียนทอดกรอบ 7-8 ชิ้น", 50),
    new Food("ท๊อฟฟี่นม 1 เม็ด", 20),
    new Food("นมจืด (250 cc) 1 กล่อง", 160),
    new Food("นมจืด (ไขมันต่ำ) 1 กล่อง", 125),
    new Food("นมจืด (ไม่มีไขมัน) 1 กล่อง", 80),
    new Food("นมถั่วเหลือง (หวานน้อย) 1 กล่อง", 140),
    new Food("นมปรุงแต่ง (รสหวาน) 1 กล่อง", 200),
    new Food("นมเปรี้ยว UHT รสผลไม้ (200 cc) 1 กล่อง", 125),
    new Food("นมเย็น 1 แก้ว", 150),
    new Food("น้อยหน่า 1/2 ผล", 60),
    new Food("น้ำกระเจี๊ยบ 1 แก้ว", 120),
    new Food("น้ำขิง (ขิงผงรสหวาน) 1 กล่อง", 60),
    new Food("น้ำจับเลี้ยง 1 แก้ว", 100),
    new Food("น้ำชาเขียว (250 ml) 1 กล่อง", 70),
    new Food("น้ำชาเขียวผสมน้ำผึ้ง (250 ml) 1 กล่อง", 70),
    new Food("น้ำตาลทราย 1 ช้อนชา", 20),
    new Food("น้ำนมข้าวโพด 1 แก้ว", 80),
    new Food("น้ำผลไม้รวม 1 กล่อง", 100),
    new Food("น้ำผักรวม 1 กล่อง", 90),
    new Food("น้ำฝรั่ง 100%(200 ml) 1 กล่อง", 100),
    new Food("น้ำพริกกะปิผักสด 2 ช้อนโต๊ะ", 55),
    new Food("น้ำพริกปลาป่น 1 ถ้วย", 35),
    new Food("น้ำพริกมะขามสด 1 ถ้วย", 210),
    new Food("น้ำพริกมะขามเปียก 1 ถ้วย", 55),
    new Food("น้ำพริกมะม่วง 1 ถ้วย", 100),
    new Food("น้ำพริกลงเรือ 1 ถ้วย", 195),
    new Food("น้ำพริกหนุ่ม 2 ช้อนโต๊ะ", 35),
    new Food("น้ำพริกอ่อง 2 ช้อนโต๊ะ", 160),
    new Food("น้ำมะตูม 1 แก้ว", 120),
    new Food("น้ำมะนาว 1 แก้ว", 100),
    new Food("น้ำมะพร้าว 1 แก้ว", 120),
    new Food("น้ำมะพร้าวผสมเนื้อ 1 กล่อง", 150),
    new Food("น้ำมะเขือเทศ 1 แก้ว", 48),
    new Food("น้ำมะเขือเทศ100%(200 ml) 1 กล่อง", 50),
    new Food("น้ำลำใย 1 แก้ว", 100),
    new Food("น้ำสับปะรด 1 แก้ว", 125),
    new Food("น้ำสัปปะรด 100%(200 ml) 1 กล่อง", 100),
    new Food("น้ำส้ม 100%(200 ml) 1 กล่อง", 120),
    new Food("น้ำส้มคั้น 1 แก้ว", 90),
    new Food("น้ำองุ่น 1 แก้ว", 112),
    new Food("น้ำองุ่นแดง 100%(200 ml) 1 กล่อง", 120),
    new Food("น้ำอัดลม (หวาน) 1 แก้ว", 75),
    new Food("น้ำอัดลมประเภทโคล่า(325 cc) 1 กระป๋อง", 130),
    new Food("น้ำอ้อย 1/2 แก้ว", 120),
    new Food("น้ำเต้าหู้(จืด) 1 แก้ว", 75),
    new Food("น้ำแอปเปิ้ลแดง 100%(200 ml) 1 กล่อง", 120),
    new Food("น้ำใบบัวบก 1 แก้ว", 120),
    new Food("น้ำใบเตย 1 แก้ว", 120),
    new Food("บรั่นดี (60 cc) 1 แก้ว", 130),
    new Food("บราวนี่ 1 ชิ้น", 340),
    new Food("บะจ่าง 1 ลูก", 300),
    new Food("บะหมี่กรอบราดหน้า 1 จาน", 515),
    new Food("บะหมี่กรอบราดหน้า รวมมิตร 1 จาน", 690),
    new Food("บะหมี่กรอบราดหน้า ไก่ หน่อไม้ 1 จาน", 660),
    new Food("บะหมี่กึ่งสำเร็จรูปผัดกระเพราหมู 1 จาน", 540),
    new Food("บะหมี่กึ่งสำเร็จรูปผัดขี้เมา 1 จาน", 530),
    new Food("บะหมี่น่องไก่-น้ำ 1 ชาม", 375),
    new Food("บะหมี่น้ำต้มยำ หมู 1 ถ้วย", 300),
    new Food("บะหมี่เกี๊ยวหมูแดง-น้ำ 1 ชาม", 305),
    new Food("บะหมี่เกี๊ยวเป็ดย่าง 1 ถ้วย", 415),
    new Food("บะหมี่เป็ดน้ำ 1 ถ้วย", 370),
    new Food("บะหมี่แห้ง หมูแดง 1 จาน", 345),
    new Food("บัวลอย 1 ถ้วย", 223),
    new Food("บัวลอยน้ำขิง 1 ถ้วย", 160),
    new Food("บัวลอยเผือก 1 ถ้วย", 300),
    new Food("บาร์บีคิวซี่โครงหมู ข้าวคลุกเนย 1 ชุด", 340),
    new Food("บูลเบอร์รี่ชีสเค้ก 1 ชิ้น", 285),
    new Food("ปลากระพงนึ่งมะนาว 1 ชิ้นกลาง", 155),
    new Food("ปลาชุบขนมปังทอด สลัดผัก 1 จาน", 595),
    new Food("ปลาช่อนอบเกลือ 1 ตัว", 220),
    new Food("ปลาซาบะย่าง 1 ตัว", 220),
    new Food("ปลาดุกย่าง น้ำปลามะนาว 1 ตัวเล็ก", 165),
    new Food("ปลาทอดสามรส 1 ตัวกลาง", 470),
    new Food("ปลาทูทอด 1 ตัวกลาง", 280),
    new Food("ปลาราดซอสมะนาว มันฝรั่งทอด 1 จาน", 560),
    new Food("ปลาราดพริก 1 จาน", 300),
    new Food("ปลาร้าทรงเครื่อง 1 ถ้วย", 155),
    new Food("ปลาร้าสับ 1 ถ้วย", 35),
    new Food("ปลาสลิดทอด 1 ตัว", 190),
    new Food("ปลาสำลีแดดเดียว ยำมะม่วง ครึ่งตัวเล็ก", 415),
    new Food("ปลาหมึกนึ่งมะนาว 1 ตัว", 75),
    new Food("ปลาหมึกผัดฉ่า 1 ถ้วย", 260),
    new Food("ปลาอินทรีย์เค็มทอด 1 จาน", 115),
    new Food("ปลาเล็กปลาน้อยทอดกรอบ 1 ช้อนโต๊ะ", 80),
    new Food("ปลาแซลมอนย่าง 1 จาน", 260),
    new Food("ปอเปี๊ยะทอด 2 ชิ้น", 315),
    new Food("ปอเปี๊ยะสด 1 ชิ้น", 175),
    new Food("ปาท่องโก๋ 1 คู่กลาง", 270),
    new Food("ปีกไก่สอดไส้ทอด 3 ชุด", 310),
    new Food("ป๊อปคอร์น 1 ถ้วย", 65),
    new Food("ผัดกะหล่ำปลี หมู กุ้ง 1 จาน", 230),
    new Food("ผัดคะน้าปลาเค็ม 1 จาน", 200),
    new Food("ผัดดอกกะหล่ำกับกุ้ง 1 จาน", 210),
    new Food("ผัดดอกกุ่ยช่ายกับตับ 1 จาน", 210),
    new Food("ผัดถั่วงอกกับเต้าหู้ 1 จาน", 155),
    new Food("ผัดถั่วลันเตากับกุ้ง 1 จาน", 190),
    new Food("ผัดบร็อกโคลี่กับกุ้ง 1 จาน", 210),
    new Food("ผัดบวบใส่ไข่ 1 จาน", 210),
    new Food("ผัดผักกระเฉดน้ำมันหอย 1 จาน", 185),
    new Food("ผัดผักกาดขาวหมู วุ้นเส้น 1 จาน", 230),
    new Food("ผัดผักกาดดองใส่ไข่ 1 จาน", 205),
    new Food("ผัดผักบุ้งไฟแดง 1 จาน", 210),
    new Food("ผัดผักรวมกับหมู 1 จาน", 210),
    new Food("ผัดพริกขิงกุ้งกับถั่วฝักยาว 1 ถ้วย", 245),
    new Food("ผัดพริกขิงหมูกับถั่วฝักยาว 1 จาน", 265),
    new Food("ผัดพริกแกงหมูกับหน่อไม้ 1 ถ้วย", 200),
    new Food("ผัดฟักทองใส่ไข่ 1 จาน", 255),
    new Food("ผัดมะเขือยาวหมูสับ 1 จาน", 210),
    new Food("ผัดยอดมะระน้ำมันหอย 1 จาน", 185),
    new Food("ผัดวุ้นเส้นใส่ไข่ 1 จาน", 265),
    new Food("ผัดสะตอกับหมู กุ้ง 1 จาน", 200),
    new Food("ผัดหน่อไม้กับไข่ 1 จาน", 200),
    new Food("ผัดหน่อไม้ฝรั่งกับกุ้ง 1 จาน", 230),
    new Food("ผัดเปรี้ยวหวานไก่ 1 จาน", 215),
    new Food("ผัดเผ็ดปลาดุก 1 ถ้วย", 200),
    new Food("ผัดเผ็ดปลาทอดกรอบ 1 ถ้วย", 290),
    new Food("ผัดเผ็ดหมูกับมะเขือ 1 จาน", 250),
    new Food("ผัดไชโป๊วใส่ไข่ 1 จาน", 125),
    new Food("ผัดไทยไข่ห่อ 1 จาน", 565),
    new Food("ผัดไทยไร้เส้น 1 จาน", 350),
    new Food("ฝรั่ง 1/2 ผล", 60),
    new Food("ฝรั่งกลม (สาลี่) 1/2 ผล", 60),
    new Food("ฝอยทอง 1 แพ", 146),
    new Food("พอร์คชอปทอด ผักผัดเนย 1 จาน", 545),
    new Food("พะแนงไก่ 1 ถ้วย", 230),
    new Food("พายกรอบ (โรยน้ำตาล) 2 ชิ้น", 235),
    new Food("พายชีสบูลเบอร์รี่ 1 ชิ้น", 350),
    new Food("พายทูน่า 1 ชิ้น", 280),
    new Food("พายสับปะรด 1 ชิ้น", 505),
    new Food("พายเผือก 1 ชิ้น", 425),
    new Food("พายไส้กรอก 1 ชิ้น", 400),
    new Food("พายไส้แฮม 1 ชิ้น", 400),
    new Food("พายไส้ไก่ 1 ชิ้น", 405),
    new Food("พิซซ่าขอบไส้กรอกชีส 1 ชิ้น", 340),
    new Food("พิซซ่าทะเล 1 ชิ้น", 335),
    new Food("พิซซ่าฮาวายเอี้ยน 1 ชิ้น", 345),
    new Food("พิซซ่าไส้กรอก 1 ชิ้น", 290),
    new Food("พุทรา 4 ผล", 60),
    new Food("ฟรุตสลัด 1 ถ้วย", 180),
    new Food("ฟรุตเค้ก 1 ชิ้น", 400),
    new Food("ฟรุ้ตบาร์ 1 ชิ้น", 305),
    new Food("ฟักตุ๋นไก่มะนาวดอง 1 ถ้วย", 125),
    new Food("ฟักทองนึ่งโรยมะพร้าว 1 จานเล็ก", 188),
    new Food("ฟักทองเชื่อม 1 จานเล็ก", 167),
    new Food("ฟักทองแกงบวด 1 ถ้วย", 185),
    new Food("มะกอกทรงเครื่อง 5 ผล", 165),
    new Food("มะกอกฝรั่ง 3 ผล", 60),
    new Food("มะกอกแช่อิ่ม 5 ผล", 135),
    new Food("มะขามคลุก 6 เม็ด", 10),
    new Food("มะขามหวาน 2 ฝัก", 60),
    new Food("มะขามเทศ 3 ฝัก", 60),
    new Food("มะดันแช่อิ่ม 1 ผล", 60),
    new Food("มะปรางสุก 3 ผล", 60),
    new Food("มะม่วงน้ำดอกไม้สุก 4 ชิ้น", 60),
    new Food("มะม่วงน้ำปลาหวาน 5 ชิ้น", 165),
    new Food("มะม่วงอกร่องสุก 4 ชิ้น", 60),
    new Food("มะม่วงเขียวเสวย 1/2 ผล", 60),
    new Food("มะยม 15 ผล", 30),
    new Food("มะยมหยี 5 เม็ด", 135),
    new Food("มะยมเชื่อม 5 เม็ด", 135),
    new Food("มะละกอ 8 ชิ้นพอคำ", 60),
    new Food("มะเฟือง 1/2 ผล", 60),
    new Food("มะไฟ 15 ผล", 60),
    new Food("มักกะโรนีขี้เมาไก่ 1 จาน", 520),
    new Food("มักกะโรนีผัดกุ้ง 1 จาน", 420),
    new Food("มังคุด 4 ผล", 60),
    new Food("มันทอด 2 ชิ้น", 248),
    new Food("มันฝรั่งแผ่นทอด (Chip) 6 ชิ้น", 80),
    new Food("มันรังนก 2 ก้อน", 95),
    new Food("มันสำปะหลังปิ้งชุบกะทิ 1 ชิ้น", 165),
    new Food("มันเทศเชื่อม 1 จานเล็ก", 230),
    new Food("มันแกงบวด 1 ถ้วย", 184),
    new Food("มาการีน 1 ช้อนชา", 45),
    new Food("มิลค์เชค 1 แก้ว", 150),
    new Food("ยากิโซบะ 1 จาน", 400),
    new Food("ยำกุนเชียง 1 จาน", 220),
    new Food("ยำขนมจีน 1 จาน", 220),
    new Food("ยำถั่วพู 1 จาน", 185),
    new Food("ยำบะหมี่กึ่งสำเร็จรูป 1 จาน", 215),
    new Food("ยำปลากระป๋อง 1 ถ้วย", 55),
    new Food("ยำปลาดุกฟู 1 จาน", 275),
    new Food("ยำผักกะเฉด 1 จาน", 115),
    new Food("ยำผักกาดดอง", 35),
    new Food("ยำผักบุ้งทอดกรอบ 1 จาน", 310),
    new Food("ยำมะเขือยาว 1 จาน", 115),
    new Food("ยำรวมมิตรทะเล 1 จาน", 150),
    new Food("ยำวุ้นเส้น 1 จาน", 120),
    new Food("ยำหนังหมู 1 จาน", 220),
    new Food("ยำหมูย่าง 1 จาน", 165),
    new Food("ยำเนื้อย่าง 1 จาน", 165),
    new Food("ยำไข่ต้ม 1 ฟอง", 105),
    new Food("ยำไส้กรอก 1 จาน", 110),
    new Food("รวมมิตร 1 ถ้วย", 230),
    new Food("ระกำ 4 ผล", 30),
    new Food("ลองกอง 10 ผล", 60),
    new Food("ลอดช่องน้ำกะทิ 1 ถ้วย", 210),
    new Food("ลอดช่องสิงคโปร์ 1 ถ้วย", 215),
    new Food("ละมุด 1 1/2 ผล", 60),
    new Food("ลางสาด 10 ผล", 60),
    new Food("ลาบไก่ 1 จาน", 125),
    new Food("ลาบหมู 1 จาน", 130),
    new Food("ลำใยในน้ำเชื่อม 1 ถ้วย", 180),
    new Food("ลำไย 4 ผล", 60),
    new Food("ลิ้นจี่ 4 ผล", 60),
    new Food("ลิ้นจี่ในน้ำเชื่อม 1 ถ้วย", 110),
    new Food("ลูกชิ้นทอด 6 ลูก", 210),
    new Food("ลูกชิ้นปิ้ง 1 ไม้", 165),
    new Food("ลูกชุบ 3 ชิ้น", 170),
    new Food("ลูกตาลลอยแก้ว 1 ถ้วย", 180),
    new Food("ลูกตาลอ่อน 1 1/2 ผล", 60),
    new Food("ลูกพลับ 1/2 ผล", 60),
    new Food("ลูกเกด 15 เม็ด", 60),
    new Food("ลูกเดือย 100 กรัม", 365),
    new Food("ลูกเดือยต้มน้ำตาล 1 ถ้วย", 140),
    new Food("วอดก้า 60 cc", 120),
    new Food("วิสกี้ 60 cc", 140),
    new Food("วุ้นกะทิ 1 ชิ้น", 215),
    new Food("วุ้นมะพร้าวอ่อน 1 ชิ้น", 80),
    new Food("วุ้นเส้นผัดไทย กุ้งสด 1 จาน", 520),
    new Food("สตรอวเบอร์รี่ 6 ผล", 60),
    new Food("สปาเกตตี้กระเพรากุ้ง 1 จาน", 485),
    new Food("สปาเก็ตตี้ไก่อบ 1 จาน", 430),
    new Food("สละ (หวาน) 3 ผล", 30),
    new Food("สลัดผัก 1 จาน", 240),
    new Food("สลัดเนื้อสันในทอด 1 จาน", 490),
    new Food("สลัดแขก 1 จาน", 230),
    new Food("สังขยา 1 ชิ้นเล็ก", 204),
    new Food("สังขยา(ทาขนมปัง) 1 ช้อนชา", 20),
    new Food("สังขยาฟักทอง 1 ชิ้นเล็ก", 288),
    new Food("สังขยาเผือก 1 ชิ้นเล็ก", 222),
    new Food("สับปะรด 8 ชิ้นพอคำ", 60),
    new Food("สาคูบัวลอย 1 ถ้วย", 162),
    new Food("สาคูเปียกรวมมิตร 1 ถ้วย", 170),
    new Food("สาคูไส้หมู 4 ลูก", 205),
    new Food("สาลี่ 1 ชิ้น", 116),
    new Food("สาลี่หอม 1 ผล", 60),
    new Food("สาเกเชื่อมราดกะทิ 1 ชิ้น", 235),
    new Food("สุกียากี้แห้งทะเล 1 ถ้วย", 280),
    new Food("สุกี้ยากี้ไก่-น้ำ 1 ชาม", 345),
    new Food("สเต็กปลาย่าง 1 จาน", 260),
    new Food("สเต็กหมู ผักสดคลุก 1 จาน", 505),
    new Food("สเต็กหมู สลัดผักสด 1 จาน", 375),
    new Food("สเต็กไก่ทอด มันบด 1 จาน", 615),
    new Food("ส้มตำปู 1 จาน", 35),
    new Food("ส้มตำไทย 1 จาน", 55),
    new Food("ส้มเขียวหวาน 1 ผล", 60),
    new Food("ส้มเช้ง 1 ผล", 60),
    new Food("ส้มแป้น 1 กิโลกรัม", 340),
    new Food("ส้มโอ 1 กลีบ", 60),
    new Food("หมี่กรอบราดหน้าหมู 1 จาน", 690),
    new Food("หมี่กะทิ 1 จาน", 405),
    new Food("หมี่ซั่วผัด 1 จาน", 395),
    new Food("หมุย่างเกาหลี 1 ชุด", 375),
    new Food("หมูกรอบ 1 จาน", 560),
    new Food("หมูกะทะ 1 ชุด", 375),
    new Food("หมูคลุกเกร็ดขนมปังทอด ซอส 1 ชุด", 645),
    new Food("หมูจุ่ม 1 ชุด", 375),
    new Food("หมูทอดกระเทียมพริกไทย 3x5 นิ้ว", 245),
    new Food("หมูทอดเนย สลัดน้ำใส 1 จาน", 635),
    new Food("หมูน้ำตก 1 จาน", 165),
    new Food("หมูปิ้ง 2 ไม้", 150),
    new Food("หมูผัดขิง 1 จาน", 275),
    new Food("หมูฝอย 2 ช้อนโต๊ะ", 135),
    new Food("หมูยอชุบแป้งทอด 2 ชิ้น", 250),
    new Food("หมูสะเต๊ะ 2 ไม้", 230),
    new Food("หมูหยอง 2 ช้อนโต๊ะ", 75),
    new Food("หมูแผ่น 1 แผ่นกลาง", 120),
    new Food("หลนปูเค็ม ผักสด 1 ถ้วย", 205),
    new Food("หอยแมลงภู่ทอด 1 จาน", 605),
    new Food("หอยแมลงภู่อบหม้อดิน 4-5 ตัว", 85),
    new Food("หัวกะทิ 1 ช้อนชา", 45),
    new Food("องุ่น (หวาน) 15 ผล", 60),
    new Food("องุ่น (เปรี้ยวอมหวาน) 20 ผล", 60),
    new Food("อัพไซด์ดาวน์เค้ก 1 ชิ้น", 395),
    new Food("อัลมอนต์อบเกลือ 1 ช้อนโต๊ะ", 45),
    new Food("อาลัว 4 ชิ้น", 145),
    new Food("อ้อยควั่น 5 ชิ้น", 60),
    new Food("เกาลัดคั่ว 100 กรัม", 246),
    new Food("เกาลัดจีน 4 เม็ดใหญ่ 35 กรัม", 80),
    new Food("เกาเหลาลูกชิ้นน้ำใส 1 ถ้วย", 225),
    new Food("เกี๊ยวกรอบ 3 ชิ้น", 235),
    new Food("เกี๊ยวกรอบราดหน้ากุ้ง 1 จาน", 635),
    new Food("เกี๊ยวซ่า 3 ชิ้น", 190),
    new Food("เกี๊ยวน้ำกุ้ง 1 ชาม", 275),
    new Food("เกี๊ยวปลาน้ำ 1 ถ้วย", 165),
    new Food("เครื่องในไก่ผัดขิง 1 จาน", 200),
    new Food("เค้กกล้วยตาก 1 ชิ้น", 305),
    new Food("เค้กกล้วยหอม 1 ชิ้น", 370),
    new Food("เค้กช็อคโกแลต 1 ชิ้น", 275),
    new Food("เค้กเนย 1 ชิ้น", 255),
    new Food("เค้กเนยแต่งหน้า 1 ชิ้น", 405),
    new Food("เค้กใบเตย 1 ชิ้น", 250),
    new Food("เงาะ 4 ผล", 60),
    new Food("เฉาก๊วย 1 ถ้วย", 90),
    new Food("เชอรี่ (มาราชิโน) 4 ผล", 60),
    new Food("เดนิสแฮม 1 ชิ้น", 385),
    new Food("เต้าส่วน 1 ถ้วย", 215),
    new Food("เต้าหู้ขาวอ่อน 1 หลอด", 110),
    new Food("เต้าหู้ทอด 3 ชิ้น", 260),
    new Food("เต้าหู้นมสด 1 ถ้วย", 150),
    new Food("เต้าหู้เหลือง 1 อัน", 90),
    new Food("เต้าฮวยน้ำขิง 1 ถ้วย", 130),
    new Food("เต้าฮวยฟรุตสลัด 1 ถ้วย", 150),
    new Food("เต้าเจี้ยวขาว 100 กรัม", 117),
    new Food("เทมปุระ 3 ชิ้น", 250),
    new Food("เนย 1 ช้อนชา", 45),
    new Food("เนื้อน้ำตก 1 จาน", 165),
    new Food("เนื้อมะพร้าวอ่อน 100 กรัม", 77),
    new Food("เนื้อมะพร้าวแก่ 100 กรัม", 312),
    new Food("เนื้อเค็มทอด 3x5 นิ้ว", 280),
    new Food("เบียร์ไทย 1 แก้ว", 148),
    new Food("เป็ดตุ๋น มะนาวดอง 1 ถ้วย", 110),
    new Food("เป็ดพะโล้ 1 ถ้วย", 110),
    new Food("เผือกน้ำกะทิ 1 ถ้วย", 250),
    new Food("เผือกสอดไส้ทอด 1 ชิ้น", 260),
    new Food("เผือกเชื่อม 1 จานเล็ก", 220),
    new Food("เฝอ 1 ถ้วย", 240),
    new Food("เฟรนฟรายด์ (French Fried) 6 ชิ้น", 220),
    new Food("เมล็ดทานตะวันอบกรอบ 1 ช้อนโต๊ะ", 45),
    new Food("เมล็ดบัวนึ่ง 100 กรัม", 157),
    new Food("เมล็ดฟักทองอบกรอบ 1 ช้อนโต๊ะ", 55),
    new Food("เมล็ดแตงโมแห้ง 1 ช้อนโต๊ะ", 45),
    new Food("เมี่ยงก๋วยเตี๋ยว 3 คำ", 60),
    new Food("เมี่ยงคะน้า 3 คำ", 60),
    new Food("เมี่ยงคำ 3 คำ", 90),
    new Food("เม็ดขนุน 5 เม็ด", 174),
    new Food("เม็ดมะม่วงหิมพานต์ 100 กรัม", 493),
    new Food("เม็ดมะม่วงหิมพานต์อบเนย 8-10 เม็ด", 110),
    new Food("เยลลี่ถ้วย 2 ถ้วย", 80),
    new Food("เย็นตาโฟน้ำ 1 ชาม", 290),
    new Food("เส้นจันท์ผัดปู 1 จาน", 575),
    new Food("เส้นหมี่ลูกชิ้นน้ำใส 1 ชาม", 225),
    new Food("เส้นหมี่ลูกชิ้นหมูแห้ง 1 ถ้วย", 430),
    new Food("เส้นใหญ่ผัดขี้เมา", 550),
    new Food("เหล้ายิน 60 cc", 120),
    new Food("เหล้ารัม 60 cc", 120),
    new Food("เอแคร์ไส้ครีม 1 ชิ้น", 225),
    new Food("แกงกะหรี่หมู 1 ถ้วย", 325),
    new Food("แกงกะหรี่ไก่ 1 ถ้วย", 450),
    new Food("แกงขี้เหล็ก 1 ถ้วย", 195),
    new Food("แกงขี้เหล็กหมูย่าง 1 ถ้วย", 245),
    new Food("แกงจืดตำลึงหมูสับ 1 ถ้วย", 90),
    new Food("แกงจืดถั่วงอกหมูสับ 1 ถ้วย", 50),
    new Food("แกงจืดฟักยัดไส้ 1 ถ้วย", 90),
    new Food("แกงจืดมะระยัดไส้ 1 ถ้วย", 90),
    new Food("แกงจืดวุ้นเส้น 1 ถ้วย", 115),
    new Food("แกงจืดเต้าหู้ยัดไส้ 1 ถ้วย", 110),
    new Food("แกงจืดเต้าหู้หมูสับ 1 ถ้วย", 80),
    new Food("แกงจืดไข่เจียว 1 ถ้วย (ไข่ 1 ฟอง)", 220),
    new Food("แกงป่าไก่ 1 ถ้วย", 130),
    new Food("แกงมัสมั่นไก่ 1 ถ้วย", 325),
    new Food("แกงส้มชะอมชุบไข่ทอดกับกุ้ง 1 ถ้วย", 270),
    new Food("แกงส้มดอกแคกับกุ้ง 1 ถ้วย", 105),
    new Food("แกงส้มปลาแปะซะ 1 ถ้วย", 160),
    new Food("แกงส้มผักกะเฉด-ปลา 1 ชาม", 110),
    new Food("แกงส้มผักบุ้ง ปลาช่อน 1 ถ้วย", 105),
    new Food("แกงส้มผักรวม 1 ถ้วย", 120),
    new Food("แกงส้มผักรวมกุ้ง 1 ถ้วย", 105),
    new Food("แกงหมูเทโพ 1 ถ้วย", 300),
    new Food("แกงเขียวหวานปลาดุก 1 ถ้วย", 235),
    new Food("แกงเขียวหวานลูกชิ้นปลากราย 1 ถ้วย", 240),
    new Food("แกงเขียวหวานหมู 1 ถ้วย", 235),
    new Food("แกงเขียวหวานไก่ 1 ถ้วย", 240),
    new Food("แกงเผ็ดฟักทอง ใส่หมู 1 ถ้วย", 250),
    new Food("แกงเผ็ดลูกชิ้นปลา 1 ถ้วย", 240),
    new Food("แกงเผ็ดหมูยอดมะพร้าว 1 ถ้วย", 245),
    new Food("แกงเผ็ดเป็ดย่าง 1 ถ้วย", 240),
    new Food("แกงเผ็ดไก่ใส่มะเขือ 1 ถ้วย", 235),
    new Food("แกงเผ็ดไก่ใส่หน่อไม้ 1 ถ้วย", 245),
    new Food("แกงเลียง 1 ชาม", 115),
    new Food("แกงเหลืองมะละกอกับกุ้ง 1 ถ้วย", 80),
    new Food("แกงเหลืองหน่อไม้ดองกับปลา 1 ถ้วย", 80),
    new Food("แกงไตปลา 1 ถ้วย", 50),
    new Food("แก้วมังกร 8 ชิ้นพอคำ", 60),
    new Food("แคนตาลูป 8 ชิ้นพอคำ", 30),
    new Food("แคบหมู มีมัน 5 ชิ้นเล็ก", 65),
    new Food("แคบหมูไร้มัน 5 ชิ้นเล็ก", 50),
    new Food("แจ่วบอง 1 ถ้วย", 25),
    new Food("แซนวิชทูน่า 1 คู่", 180),
    new Food("แซนวิชแฮม ชีส 1 คู่", 290),
    new Food("แซนวิชไก่ 1 คู่", 240),
    new Food("แตงโม 1 กิโลกรัม", 250),
    new Food("แตงโม 1 ชิ้นพอดีคำ 60 กรัม", 15),
    new Food("แตงไทย 8 ชิ้นพอคำ", 30),
    new Food("แบล็กฟลอเรสต์เค้ก 1 ชิ้น", 470),
    new Food("แมงลักน้ำกะทิ 1 ถ้วย", 112),
    new Food("แม่โขง (45 cc) 1 แก้ว", 43),
    new Food("แยม 1 ช้อนชา", 20),
    new Food("แยมโรล 1 ชิ้น", 310),
    new Food("แหนมสด 1 จาน", 175),
    new Food("แหนมสด ข้าวทอด 1 จาน", 290),
    new Food("แอปเปิ้ล 1/2 ผล", 60),
    new Food("แฮมเบอร์เกอร์ชีส ไก่ 1 ชิ้น", 280),
    new Food("แฮมเบอร์เกอร์ชีสไก่ 1 ชิ้น", 280),
    new Food("แฮมเบอร์เกอร์หมู 1 ชิ้น", 245),
    new Food("โกยซีหมี่ 1 จาน", 550),
    new Food("โกโก้ 1 แก้ว", 210),
    new Food("โก๋แก่รสต่าง ๆ 15 เม็ด", 55),
    new Food("โจ๊กหมู 1 ถ้วย", 160),
    new Food("โจ๊กหมู ตับ ไข่ลวก 1 ถ้วย", 230),
    new Food("โดนัท แยม น้ำตาล 1 ชิ้น", 270),
    new Food("โดนัทยีสต์ 1 ชิ้น", 250),
    new Food("โยเกิร์ต (รสธรรมชาติ) 1 กล่อง", 95),
    new Food("โยเกิร์ต (รสผลไม้) 1 กล่อง", 175),
    new Food("โยเกิร์ต (ไขมันต่ำรสผลไม้) 1 กล่อง", 160),
    new Food("โรตี (ใส่นมข้น/น้ำตาล/ใส่ไข่)", 590),
    new Food("โรตีสายไหม 1 อัน", 145),
    new Food("โรตีแกงเนื้อ, หมู 1 ชุด", 675),
    new Food("โอวัลติน 1 แก้ว", 210),
    new Food("โอเลี้ยง 1 แก้ว", 165),
    new Food("ไก่ตุ๋นมะนาวดอง 1 ถ้วย", 110),
    new Food("ไก่ทอด 1 น่อง", 345),
    new Food("ไก่ทอด 1 น่อง", 345),
    new Food("ไก่ผัดขิง 1 จาน", 210),
    new Food("ไก่ย่าง 1 น่อง", 165),
    new Food("ไก่ย่าง 1 น่อง", 165),
    new Food("ไข่ดาว 1 ฟอง", 165),
    new Food("ไข่ดาวทรงเครื่อง 1 จาน", 250),
    new Food("ไข่ตุ๋น 1 ฟอง", 75),
    new Food("ไข่ต้ม น้ำปลามะนาว 1 ฟอง", 75),
    new Food("ไข่นกกระทา 11 ใบ", 191),
    new Food("ไข่พะโล้ 1 ถ้วย", 180),
    new Food("ไข่ยัดไส้ 1 จาน", 310),
    new Food("ไข่ลวก 1 ฟอง", 75),
    new Food("ไข่ลูกเขย 1 ฟอง", 205),
    new Food("ไข่หงส์ 3 ใบ", 174),
    new Food("ไข่เค็ม 1 ฟอง", 75),
    new Food("ไข่เจียว 1 ฟอง", 200),
    new Food("ไข่เจียวหมูสับ 1 ฟอง", 250),
    new Food("ไข่ไก่-ไข่เป็ด 1 ฟอง", 84),
    new Food("ไวน์เชอรี่ 60 cc", 84),
    new Food("ไวน์แชมเปญ 60 cc", 42),
    new Food("ไส้กรอกทอด 1 ชิ้น", 280),
    new Food("ไส้กรอกอีสาน 1 อัน", 90),
    new Food("ไส้กรอกเนื้อลูกวัวอบ สลัดผัก 1 จาน", 465),
    new Food("ไส้อั่ว 4 ชิ้นพอคำ", 240),
    new Food("ไอศกรีมกะทิ 2 ก้อน", 215),
    new Food("ไอศกรีมกาแฟ 1 ก้อน", 142),
    new Food("ไอศกรีมชอกโกแล็ต 1 ก้อน", 110),
    new Food("ไอศกรีมวนิลลา 1 ก้อน", 140),
    new Food("ไอศกรีมสตรอเบอรี่ 1 ก้อน", 110),
    new Food("ไอศกรีมเรซิน 1 ก้อน", 264),
    new Food("ไก่ KFC สะโพก 1 ชิ้น", 355),
    new Food("ไก่ KFC ฮอทวิงส์ 1 ชิ้น", 78),
    new Food("McDonald แฮมเบอร์เกอร์", 250),
    new Food("McDonald ชีสเบอร์เกอร์", 300),
    new Food("McDonald ดับเบิ้ลชีสเบอร์เกอร์", 350),
    new Food("McDonald บิ๊กแมค", 480),
    new Food("McDonald เบอร์เกอร์หมู", 270),
    new Food("McDonald ซามูไรเบอร์เกอร์", 370),
    new Food("McDonald แมคฟิช", 330),
    new Food("McDonald เบอร์เกอร์ไก่เปปเปอร์", 280),
    new Food("McDonald แมคไก่", 370),
    new Food("McDonald สไปซี่ แมควิงส์ 4 ชิ้น", 370),
    new Food("McDonald ไก่ทอด (สะโพก)", 310),
    new Food("McDonald แมคนักเก็ต 6 ชิ้น", 260),
    new Food("McDonald เฟรนซ์ฟรายส์ ขนาดกลาง", 330),
    new Food("McDonald เฟรชสลัด น้ำสลัดซีอิ๊วงาญี่ปุ่น", 100),
    new Food("McDonald เฟรชสลัด น้ำสลัดครีมงาญี่ปุ่น", 110),
    new Food("McDonald โค้ก 16 ออนซ์", 200),
    new Food("McDonald กาแฟเย็น 16 ออนซ์", 200),
    new Food("McDonald โอวันติน สวิส เย็น 16 ออนซ์", 300),
    new Food("McDonald โค้กโฟลต 12 ออนซ์", 230),
    new Food("McDonald กาแฟโฟลต 12 ออนซ์", 280),
    new Food("McDonald โอวัลติน สวิส โฟลต 12 ออนซ์", 310),
    new Food("McDonald พายสับปะรด", 210),
    new Food("McDonald ไอศกรีมโคนดิพ", 230),
    new Food("McDonald ไอศกรีมโคน", 140),
    new Food("McDonald แมคเฟลอร์รี โอรีโอ", 240),
    new Food("McDonald ซันเด สตรอเบอรี่", 270),
    new Food("McDonald ซันเด ช็อกโกแลต", 330),
    new Food("McDonald พายข้าวโพด", 220),
    new Food("วาฟเฟิล 1 ชิ้น", 350),
    new Food("ฮันนี่โทส 1 ชุด (ไอศครีม 2 ก้อน)", 750),
    new Food("ฟรุ๊ตทาร์ต 1 ชิ้น", 350),
    new Food("กะปิ 100 กรัม", 144),
    new Food("น้ำบูดูเค็ม 100 กรัม", 47),
    new Food("น้ำบูดูหวาน 100 กรัม", 203),
    new Food("ใบกระวาน 100 กรัม", 372),
    new Food("ผักชีราก 100 กรัม", 57),
    new Food("ผักชีลูก 100 กรัม", 325),
    new Food("ผงกระหรี่ 100 กรัม", 299),
    new Food("ผงพะโล้ 100 กรัม", 371),
    new Food("พริกขี้หนูแห้ง 100 กรัม", 347),
    new Food("พริกชี้ฟ้าแห้ง 100 กรัม", 364),
    new Food("พริกไทยขาว 100 กรัม", 380),
    new Food("ใบมะกรูด 100 กรัม", 171),
    new Food("มะขามหวาน 100 กรัม", 333),
    new Food("ทุเรียนหมอนทอง 100 กรัม", 163),
    new Food("ทุเรียนก้านยาว 100 กรัม", 187),
    new Food("พุทรา 100 กรัม", 89),
    new Food("ชมพู่มะเหมี่ยว 100 กรัม", 24),
    new Food("กล้วยหักมุุก 100 กรัม", 113),
    new Food("กล้วยหอม 100 กรัม", 132),
    new Food("กล้วยน้ำว้า 100 กรัม", 148),
    new Food("กล้วยไข่ 100 กรัม", 147),
    new Food("ซูชิหน้าปลามากุโระ 1 คำ", 41),
    new Food("ซูชิหน้าปลาทูน่า 1 คำ", 36),
    new Food("ซูชิหน้าปลาฮามาจิ 1 คำ", 50),
    new Food("ซูชิหน้าปูอัดคานิ 1 คำ", 43),
    new Food("ซูชิหน้าหอยเชลล์โฮตาเตะ 1 คำ", 44),
    new Food("ซูชิหน้าไข่ปลาอิคุระ 1 คำ", 42),
    new Food("ซูชิหน้ากุ้งนิกิริ 1 คำ", 42),
    new Food("ซูชิหน้าปลาไหลอุนาหงิ 1 คำ", 60),
    new Food("ซูชิหน้าไข่หวานทามาโกะ 1 คำ", 63),
    new Food("ซูชิหน้าแซลมอน 1 คำ", 53),
    new Food("มะละกอดิบ 100 กรัม", 30),
    new Food("มัสตาด 100 กรัม", 511),
    new Food("เมล็ดยี่หร่า 100 กรัม", 313),
    new Food("ใบสะระแหน่ 100 กรัม", 52),
    new Food("ใบโหระพา 100 กรัม", 54),
    new Food("หอมแดง 100 กรัม", 63),
    new Food("อบเชย 100 กรัม", 329),
    new Food("นมข้นหวาน 100 กรัม", 330),
    new Food("แจ่วปลาร้า 150 กรัม (1 ถ้วย)", 142),
    new Food("ตำข้าวปุ้น 1 จาน", 180),
    new Food("หม่ำ 100 กรัม (1 จาน)", 207),
    new Food("คั่วไข่มดแดง 200 กรัม (1 จาน)", 250),
    new Food("ก้อยกุ้งฝอย 300 กรัม (1 จาน)", 268),
    new Food("แกงหน่อไม้อีสาน 100 กรัม (1 ถ้วย)", 80),
    new Food("เสือร้องไห้ 100 กรัม (1 จาน)", 281),
    new Food("ลาบเป็น 200 กรัม (1 จาน)", 300),
    new Food("ผัดหมี่อีสาน 200 กรัม (1 จาน)", 305),
    new Food("ไส้กรอกอีสาน 100 กรัม (4-5 ไม้)", 410),
    new Food("ปลาส้มทอด 300 กรัม", 1046),
    new Food("แกงฮังเล 300 กรัม (1 ถ้วย)", 476),
    new Food("น้ำพริกข่า 150 กรัม (1 ถ้วย)", 339),
    new Food("แกงผักกาดจอ 300 กรัม (1 ถ้วย)", 138),
    new Food("แกงขนุน 300 กรัม (1 ถ้วย)", 147),
    new Food("มาการอง 1 ชิ้น", 100),
    new Food("เฟอร์ราโร โรชเชอร์ 1 ชิ้น", 70),
    new Food("คั่วกลิ้งหมู 200 กรัม (1 จาน)", 403),
    new Food("ใบเหลียงผัดไข่ 1 จาน", 394),
    new Food("ต้มส้มปลากระป๋อง 300 กรัม", 180),
    new Food("ขนมจีนน้ำยาปักษ์ใต้ 300 กรัม (1 จาน)", 256),
    new Food("แกงเหลืองหน่อไม้ดองปลา 1 ถ้วย", 80),
    new Food("หอยนางรม 100 กรัม", 163),
    new Food("ฉลาม กระชายดำ 100 มล.", 70),
    new Food("เอ็ม-150 150 มล.", 110),
    new Food("เรดดี้โกจิเบอร์รี่ ผสมกาแฟอีน 150 มล.", 140),
    new Food("เรดดี้บู้ท (สีม่วง) 150 มล.", 120),
    new Food("RED BULL Extra เรดบูลเอ็กซ์ตร้า 170 มล.", 120),
    new Food("กระทิงแดงจีทรี 95 มล.", 40),
    new Food("กระทิงแดงเอ็กซ์ตร้าเอบีซี 145 มล.", 100),
    new Food("กระทิงแดงเอ็กซ์ตร้าซิงค์ 145 มล.", 80),
    new Food("กระทิงแดงทีโอเปล็กซ์แอล 100 มล.", 70),
    new Food("คาราบาวกรีนแอปเปิ้ล 330 มล.", 80),
    new Food("กระทิงแดง 150 มล.", 120),
    new Food("คาราบาวแดง 150 มล.", 120),
  ];



export const ACTIVITYS = [
    new Activity("กรรเชียงเรือด้วยความเร็ว 17.6กม./ชม.", 971),
    new Activity("กรรเชียงเรือด้วยความเร็ว 5.6กม./ชม.", 660),
    new Activity("กระโดดเชือก", 780),
    new Activity("กวาดพื้น", 225),
    new Activity("การเต้น Zumba", 500),
    new Activity("ขี่จักรยาน", 425),
    new Activity("ขี่จักรยานด้วยความเร็ว 14.4กม./ชม.", 415),
    new Activity("ขี่จักรยานด้วยความเร็ว 20.0กม./ชม.", 660),
    new Activity("ซักผ้าด้วยมือ", 240),
    new Activity("ตัดหญ้า", 275),
    new Activity("ตีกอล์ฟ ลากถุงกอล์ฟ", 300),
    new Activity("ตีกอล์ฟ แบกถุงกอล์ฟเอง", 360),
    new Activity("ตีกอล์ฟ, นั่งรถ", 240),
    new Activity("ทำงานบ้าน", 200),
    new Activity("ทำสวน", 375),
    new Activity("นอนหลับ", 75),
    new Activity("นั่งดูทีวี", 100),
    new Activity("นั่งทำงานใช้สมอง", 110),
    new Activity("บาสเก็ตบอล", 510),
    new Activity("ปูที่นอน", 135),
    new Activity("มวยไทย", 800),
    new Activity("ยืน", 140),
    new Activity("รีดผ้า", 150),
    new Activity("ลงนอน (ไม่หลับ)", 85),
    new Activity("วิ่งบนทางราบด้วยความเร็ว 12.8กม./ชม.", 825),
    new Activity("วิ่งบนทางราบด้วยความเร็ว 18.2กม./ชม.", 1390),
    new Activity("วิ่งเร็ว", 1050),
    new Activity("วิ่งเหยาะ ๆ", 675),
    new Activity("ว่ายน้ำ", 500),
    new Activity("ว่ายน้ำด้วยความเร็ว 2.56กม./ชม.", 700),
    new Activity("ว่ายน้ำด้วยความเร็ว 3.00กม./ชม.", 850),
    new Activity("เดินขึ้นบันได", 840),
    new Activity("เดินขึ้นเนิน", 690),
    new Activity("เดินช้า", 150),
    new Activity("เดินธรรมดา", 300),
    new Activity("เดินลงบันได", 425),
    new Activity("เดินลงเนิน", 240),
    new Activity("เดินเร็ว", 450),
    new Activity("เดินเล่น", 210),
    new Activity("เต้นรำ", 350),
    new Activity("เย็บผ้า", 115),
    new Activity("เลื่อยไม้", 515),
    new Activity("เล่นวอลเล่ย์บอล", 300),
    new Activity("เล่นสเก็ตปกติ", 420),
    new Activity("เล่นสเก็ตแข่งความเร็ว", 700),
    new Activity("เล่นฮูล่าฮูป", 430),
    new Activity("เล่นเทนนิสคู่", 360),
    new Activity("เล่นเทนนิสเดี่ยว", 480),
    new Activity("เล่นแบดมินตัน", 350),
    new Activity("เล่นโบว์ลิ่ง", 400),
    new Activity("แอโรบิค", 600),
    new Activity("เดินขึ้นเขาหรือปีนเขา", 650),
    new Activity("ออกกำลังกายแบบ HIT", 750),
];

