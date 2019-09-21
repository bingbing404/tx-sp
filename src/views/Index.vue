<template>
  <div>
  <my-header></my-header>  
    <!-- 轮播 -->
    <div class="lunbo">
      <div class="banner">
        <ul>
          <li class="active">
            <a href="javascript:;">
              <img src="img/1.jpg" alt="">
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <img src="img/2.jpg" alt="">
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <img src="img/3.png" alt="">
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <img src="img/4.jpg" alt="">
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <img src="img/5.jpg" alt="">
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <img src="img/6.jpg" alt="">
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <img src="img/7.png" alt="">
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <img src="img/8.jpg" alt="">
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <img src="img/9.jpg" alt="">
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!-- 轮播右侧列表 -->
    <div class="list">
      <a class="title" href="javascript:;">
        <svg width="16" height="11">
          <path d="M15 8A7 7 0 0 0 1 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none">
          </path>
          <path d="M8.9 5.1a1.5 1.5 0 1 0 2 2 3 3 0 1 1-2-2z" fill="currentColor"></path>
        </svg>
        <span>大家在看</span>
      </a>
      <div class="hr"></div>
      <span class="first">
        <img src="img/火焰.png" alt="">
        <span>重磅推荐</span>
      </span>
      <a href="javascript:;" class="li">
        <span class="text">篮球世界杯
          <span class="sub-t">中国韩国巅峰赛事</span>
        </span>
      </a>
      <a href="javascript:;" class="li">
        <span class="text">中国好声音
          <span class="sub-t">李荣浩哈林PK最强战队</span>
        </span>
      </a>
      <a href="javascript:;" class="li">
        <span class="text">伟大的转折
          <span class="sub-t">四渡赤水展红军英姿</span>
        </span>
      </a>
      <a href="javascript:;" class="li">
        <span class="text">中餐厅
          <span class="sub-t">杨紫王俊凯超甜合唱</span>
        </span>
      </a>
      <a href="javascript:;" class="li">
        <span class="text">魔道祖师羡云篇
          <span class="sub-t">魏无羡血洗不夜天</span>
        </span>
      </a>
      <a href="javascript:;" class="li">
        <span class="text">声入人心
          <span class="sub-t">马佳高天鹤花式嗨翻张惠妹</span>
        </span>
      </a>
      <a href="javascript:;" class="li">
        <span class="text">一块做好事
          <span class="sub-t">R1SE探望抗战老兵</span>
        </span>
      </a>
      <a href="javascript:;" class="li">
        <span class="text">合唱吧300
          <span class="sub-t">合唱夜争夺终极合唱团</span>
        </span>
      </a>
      <a href="javascript:;" class="li">
        <span class="text">我们的70年
          <span class="sub-t">奋斗中国梦</span>
        </span>
      </a>
    </div>
    <!-- 右侧固定 导航 -->
    <div class="fix">
      <ul>
        <li>
          <a href="javascript:;">
            <img src="img/f1.png" alt="">
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <img src="img/f2.png" alt="">
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <img src="img/f3.png" alt="">
          </a>
        </li>
        <li>
          <a href="#">
            <img src="img/f5.png" alt="">
          </a>
        </li>
      </ul>
    </div>
    <!-- 一楼分类 -->
    <div class="nav">
      <div class="col">
        <div class="item">
          <a href="javascript:;" class="bold">
            <img src="img/16.png" alt="">
            <span>电视剧</span>
          </a>
          <a href="javascript:;" class="grey">
            海外剧
          </a>
          <a href="javascript:;" class="grey">
            网络剧
          </a>
        </div>
        <div class="item">
          <a href="javascript:;" class="bold">
            <img src="img/15.png" alt="">
            <span>电影</span>
          </a>
          <a href="javascript:;" class="grey">
            院线大片
          </a>
          <a href="javascript:;" class="grey">
            自制电影
          </a>
        </div>
      </div>
      <div class="col">
        <div class="item">
          <a href="javascript:;" class="bold">
            <img src="img/14.png" alt="">
            <span>综艺</span>
          </a>
          <a href="javascript:;" class="grey">
            腾讯自制
          </a>
          <a href="javascript:;" class="grey">
            真人秀
          </a>
        </div>
        <div class="item">
          <a href="javascript:;" class="bold">
            <img src="img/13.png" alt="">
            <span>动漫</span>
          </a>
          <a href="javascript:;" class="grey">
            国漫
          </a>
          <a href="javascript:;" class="grey">
            日漫
          </a>
        </div>
      </div>
      <div class="col">
        <div class="item">
          <a href="javascript:;" class="bold">
            <img src="img/12.png" alt="">
            <span>少儿</span>
          </a>
          <a href="javascript:;" class="grey">
            益智
          </a>
          <a href="javascript:;" class="grey">
            儿歌          
          </a>
        </div>
        <div class="item">
          <a href="javascript:;" class="bold">
            <img src="img/11.png" alt="">
            <span>纪录片</span>
          </a>
          <a href="javascript:;" class="grey">
            美食
          </a>
          <a href="javascript:;" class="grey">
            自然
          </a>
        </div>
      </div>
      <div class="line"></div>
      <div class="ls">
        <div>
          <a href="javascript:;">
            VIP会员
          </a>
          <a href="javascript:;">
            体育
          </a>
          <a href="javascript:;">
            NBA
          </a>
          <a href="javascript:;">
            新闻
          </a>
          <a href="javascript:;">
            知识
          </a>
        </div>
        <div>
          <a href="javascript:;">
            音乐
          </a>
          <a href="javascript:;">
            热点
          </a>
          <a href="javascript:;">
            生活
          </a>
          <a href="javascript:;">
            游戏
          </a>
          <a href="javascript:;">
            更多
          </a>
        </div>
      </div>
    </div>
    <!-- 二楼 今日热门 -->
    <div class="new">
      <div class="te">
        <h2>今日热门</h2>
      </div>
      <div class="each">
        <ul>
          <li>
            <img src="img/25.jpg" alt="">
            <div>"最强女执行局长"走红:违建马上会从地球上消失</div>
          </li>
          <li>
            <img src="img/24.jpg" alt="">
            <div>极光爆发！南极中山站现绝美极光</div>
          </li>
          <li>
            <img src="img/23.jpg" alt="">
            <div>女孩从海底钓到神秘"外星生物",外形诡异</div>
          </li>
          <li>
            <img src="img/22.jpg" alt="">
            <div>高校添加热水1吨70块,学生:我不配洗澡了</div>
          </li>
          <li>
            <img src="img/21.jpg" alt="">
            <div>上海迪士尼将允许有课带食品 原告:能改变是好事</div>
          </li>
          <li>
            <img src="img/20.jpg" alt="">
            <div>全国最大3D打印桥在福建泉州落成:站满人也能承重</div>
          </li>
        </ul>
      </div>
    </div>
    <div></div>
    <!-- 三楼 原创精选 -->
    <div class="cho">
      <div class="te">
        <h2 class="tle">原创精选</h2>
        <div class="small">
          <ul>
            <li>
              <a href="javascript:;">
                <img src="img/65.webp" alt="">
                <span>大饼爱说剧</span></a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="img/64.webp" alt="">
                <span>影视故事TOP10</span></a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="img/63.webp" alt="">
                <span>Dreamers电影评.</span></a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="img/62.webp" alt="">
                <span>剧影侠</span></a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="img/61.png" alt="">
                <span>动漫唯美风</span></a>
            </li>
          </ul>
        </div>
        <div class="each">
            <ul>
              <li>
                <img src="img/35.jpg" alt="">
                <div>从奴隶升为附庸的男子只因会养马，有一门技术多重...</div>
              </li>
              <li>
                <img src="img/34.jpg" alt="">
                <div>君莫笑出道38天回忆录,全世界最好的叶修</div>
              </li>
              <li>
                <img src="img/33.jpg" alt="">
                <div>国服第一李白上线！这波骚操作也太秀了</div>
              </li>
              <li>
                <img src="img/32.jpg" alt="">
                <div>异世界超能魔术师:手搓炸弹不是事,挂王教你火焰赤</div>
              </li>
              <li>
                <img src="img/31.jpg" alt="">
                <div>陆战之王:陈晓王雷勇争坦克兵王</div>
              </li>
              <li>
                <img src="img/30.jpg" alt="">
                <div>富婆和御姐抢着和我谈恋爱？这感觉不要叫...</div>
              </li>
            </ul>
        </div>
      </div>  
    </div> 
    <!-- 四楼 热点短视频 -->
    <div class="video">
      <div class="tle">
        <h2>热点短视频</h2>
        <div class="small">
          <ul>
            <li><a href="javascript:;">为您推荐</a></li>
            <li><a href="javascript:;">吃鸡</a></li>
            <li><a href="javascript:;">军事</a></li>
            <li><a href="javascript:;">搞笑</a></li>
            <li><a href="javascript:;">英雄联盟</a></li>
            <li><a href="javascript:;">艺术</a></li>
          </ul>
        </div>
      </div>
      <div class="msg">
        <div class="le">
          <video src="img/szg_72513907_50001_6a267770b9404a6681629a61d437c88a.f622.mp4">
          </video>
        </div>
        <div class="ri">
          <ul>
            <li>
              <a href="javascript:;"><img src="img/71.jpg" alt=""></a>
              <div>女神杨丽萍太敬业！表演结束后，还不忘给徒弟指导舞蹈...</div>
            </li>
            <li>
              <a href="javascript:;"><img src="img/72.jpg" alt=""></a>
              <div>《老酒馆》由麻子的坟墓竟然被人动过？陈怀海越看越心...</div>
            </li>
            <li>
              <a href="javascript:;"><img src="img/73.jpg" alt=""></a>
              <div>“你们中秋节问嫦娥：支持台独吗？”</div>
            </li>
            <li>
              <a href="javascript:;"><img src="img/74.jpg" alt=""></a>
              <div>吃蛋黄派被查出酒驾？民警：我也来试试，看完你可能...</div>
            </li>
            <li>
              <a href="javascript:;"><img src="img/75.jpg" alt=""></a>
              <div>陆战之王：牛努力被女兵“绑走”，叶晓俊霸气救夫：别...</div>
            </li>
            <li>
              <a href="javascript:;"><img src="img/76.jpg" alt=""></a>
              <div>陆战之王：田蜜当众告白，叶晓俊吃醋献吻：牛努力是我...</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 五楼 电影频道 -->
    <div class="movie">
      <div class="auto">
        <div class="le">
          <div class="tle">
            <h2>电影</h2>
          </div>
          <div class="msg">
            <ul>
              <li>
                <a href="javascript:;"><img src="img/mzc00200fv5v1kr_y.jpg" alt="">
                <div class="time">01:15:41</div>
                </a>
                <div>
                  <p>说谎者游戏</p>
                  <div>富二代卷入惊天迷局</div>
                </div>
              </li>
              <li>
                <a href="javascript:;"><img src="img/mzc002009r3bfun_y.jpg" alt="">
                  <div class="time">01:36:16</div></a>
                <div>
                  <p>李白之天火燎原</p>
                  <div>李白化身夜行侠护长安</div>
                </div>
              </li>
              <li>
                <a href="javascript:;"><img src="img/b9d430ed414a4efe9334528c1a40ea14.gif" alt="">
                  <div class="time">01:46:46</div></a>
                <div>
                  <p>上海堡垒</p>
                  <div>鹿晗舒淇硬核激战捕食者</div>
                </div>
              </li>
              <li>
                <a href="javascript:;"><img src="img/kuh68kdppqlnfd6_y.jpg" alt="">
                  <div class="time">01:03:00</div></a>
                <div>
                  <p>吃鸡王者</p>
                  <div>吃鸡王者第一视角带你杀敌</div>
                </div>
              </li>
              <li>
                <a href="javascript:;"><img src="img/mzc0020083qtc7f_y.jpg" alt="">
                  <div class="time">01:15:38</div></a>
                <div>
                  <p>捕快卜曼</p>
                  <div>中二捕快断案相亲两不误</div>
                </div>
              </li>
              <li>
                <a href="javascript:;"><img src="img/5066e25f28124239ab72fed23ce83978.gif" alt="">
                  <div class="time">01:16:33</div></a>
                <div>
                  <p>镇妖提刑司</p>
                  <div>神探宋慈高能魂穿目睹杀人</div>
                </div>
              </li>
              <li>
                <a href="javascript:;"><img src="img/1yhaszhtgq53dwx_y.jpg" alt="">
                  <div class="time">01:30:54
                  </div></a>
                <div>
                  <p>回到过去拥抱你</p>
                  <div>彭昱畅百变造型狂撩妹</div>
                </div>
              </li>
              <li>
                <a href="javascript:;"><img src="img/msv7eyf5zv6bqij_y.jpg" alt="">
                  <div class="time">01:48:41</div>
                </a>
                <div>
                  <p>扫毒2天地对决</p>
                  <div>刘德华古天乐地铁站飙车</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="ri">
          <div class="tle">
            <h2>电影排行榜</h2>
          </div>
          <div class="msg">
            <ul>
              <li>
                <a href="javascript:;">
                  <span class="num e">1</span>
                  <span class="title">人间·喜剧</span>
                  <span class="sub-te">艾伦王智怂夫悍妇讨薪记</span>
                  <span class="look">2541.9万</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span class="num e">2</span>
                  <span class="title">上海堡垒</span>
                  <span class="sub-te">鹿晗舒淇激战捕食者</span>
                  <span class="look">2249.1万</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span class="num e">3</span>
                  <span class="title">灰猴</span>
                  <span class="sub-te">笨贼争抢"天价古董坛子"</span>
                  <span class="look">1721.6万</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span class="num">4</span>
                  <span class="title">扫毒2天地对决</span>
                  <span class="sub-te">刘德华古天乐地铁站飙车</span>
                  <span class="look">1262.2万</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span class="num">5</span>
                  <span class="title">那些女人</span>
                  <span class="sub-te">民国乱世女性谱写抗战传奇</span>
                  <span class="look">801.2万</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span class="num">6</span>
                  <span class="title">复仇者联盟4：终局之战</span>
                  <span class="sub-te">漫威十年布局，迎来终章</span>
                  <span class="look">593.9万</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span class="num">7</span>
                  <span class="title">比悲伤更悲伤的故事</span>
                  <span class="sub-te">陈意涵将悲伤进行到底</span>
                  <span class="look">593.9万</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span class="num">8</span>
                  <span class="title">家有喜事</span>
                  <span class="sub-te">周星驰经典贺岁</span>
                  <span class="look">460.1万</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- 六楼 同步剧场 -->
    <div class="sync">
      <div class="auto">
        <div class="le">
          <div class="tle">
            <h2>同步剧场</h2>
          </div>
          <div class="msg">
            <ul>
              <li>
                <a href="javascript:;"><img src="img/85.jpg" alt="">
                <div class="time">更新至08集</div>
                </a>
                <div>
                  <p>亲·爱的味道[会员抢先看]</p>
                  <div>失味主厨陆毅遇上解药郭采洁</div>
                </div>
              </li>
              <li>
                <a href="javascript:;"><img src="img/2051f5e4a25941afa9243597c17036d7.gif" alt="">
                  <div class="time">更新至29集</div></a>
                <div>
                  <p>陆战之王[会员抢先看]</p>
                  <div>陈晓王雷勇争坦克兵王</div>
                </div>
              </li>
              <li>
                <a href="javascript:;"><img src="img/84.jpg" alt="">
                  <div class="time">34:56</div></a>
                <div>
                  <p>滑魂[会员抢先看]</p>
                  <div>郭子凡炫酷滑板 挑战抑郁</div>
                </div>
              </li>
              <li>
                <a href="javascript:;"><img src="img/83.jpg" alt="">
                  <div class="time">更新至02集</div></a>
                <div>
                  <p>平行世界[同步泰国]</p>
                  <div>小水Baifern恋上撕漫男</div>
                </div>
              </li>
              <li>
                <a href="javascript:;"><img src="img/9536f6803e024a1c955b570214df8809.gif" alt="">
                  <div class="time">更新至32集</div></a>
                <div>
                  <p>老酒馆[会员抢先看]</p>
                  <div>陈宝国秦海璐闯关东</div>
                </div>
              </li>
              <li>
                <a href="javascript:;"><img src="img/4948e7087d744fb79e0d2a96f346f436.gif" alt="">
                  <div class="time">全40集</div></a>
                <div>
                  <p>全职高手[会员抢先看]</p>
                  <div>杨洋江疏影共赴荣耀之路</div>
                </div>
              </li>
              <li>
                <a href="javascript:;"><img src="img/82.jpg" alt="">
                  <div class="time">更新至20集
                  </div></a>
                <div>
                  <p>柴小七[会员抢先看]</p>
                  <div>霸总徐志贤邂逅外星少女</div>
                </div>
              </li>
              <li>
                <a href="javascript:;"><img src="img/mzc002009rrrr0r_y.jpg" alt="">
                  <div class="time">更新至28集</div></a>
                <div>
                  <p>遇见幸福[会员抢先看]</p>
                  <div>遇中年危机的樊胜美更惨了</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="ri">
          <div class="tle">
            <h2>电视剧频道排行</h2>
          </div>
          <div class="msg">
            <ul>
              <li>
                <a href="javascript:;">
                  <span class="num e">1</span>
                  <span class="title">陆战之王</span>
                  <span class="sub-te">陈晓王雷勇争坦克兵王</span>
                  <span class="look">更新至29集</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span class="num e">2</span>
                  <span class="title">外星女生柴小七</span>
                  <span class="sub-te">霸总徐志贤邂逅外星少女</span>
                  <span class="look">更新至20集</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span class="num e">3</span>
                  <span class="title">老酒馆</span>
                  <span class="sub-te">陈宝国秦海璐勇闯关东</span>
                  <span class="look">更新至32集</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span class="num">4</span>
                  <span class="title">遇见幸福</span>
                  <span class="sub-te">蒋欣李光洁郭京飞直面中年危机</span>
                  <span class="look">更新至28集</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span class="num">5</span>
                  <span class="title">小欢喜</span>
                  <span class="sub-te">黄磊海清携手带娃备战高考</span>
                  <span class="look">全49集</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span class="num">6</span>
                  <span class="title">陈情令</span>
                  <span class="sub-te">肖战王一博共闯侠义江湖</span>
                  <span class="look">全50集</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span class="num">7</span>
                  <span class="title">九千米爱情</span>
                  <span class="sub-te">冲上云霄吧少年们！</span>
                  <span class="look">更新至12集</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span class="num">8</span>
                  <span class="title">极限17</span>
                  <span class="sub-te">郭子凡挑战滑板 走出抑郁</span>
                  <span class="look">更新至20集</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- 七楼 综艺 -->
    <div class="show">
      <div class="auto">
        <div class="le">
          <div class="tle">
            <h2>综艺</h2>
          </div>
          <div class="msg">
            <ul>
              <li>
                <a href="javascript:;"><img src="img/40.jpg" alt="">
                <div class="time">2019-09-10期</div>
                </a>
                <div class="con">
                  <p>我要打篮球·全场质疑</p>
                  <div>一碰就倒？300斤胖子演戏</div>
                </div>
              </li>
              <li>
                <a href="javascript:;"><img src="img/41.jpg" alt="">
                  <div class="time">2019-09-10期</div></a>
                <div class="con">
                  <p>荣耀美少女·收官</p>
                  <div>美翻！少女cos阿狸跳舞</div>
                </div>
              </li>
              <li>
                <a href="javascript:;"><img src="img/42.jpg" alt="">
                  <div class="time">2019-09-08期</div></a>
                <div class="con">
                  <p>脱口秀·沈阳明星就业</p>
                  <div>汪苏泷差点被杜海涛抢工作</div>
                </div>
              </li>
              <li>
                <a href="javascript:;"><img src="img/43.jpg" alt="">
                  <div class="time">2019-09-08期</div></a>
                <div class="con">
                  <p>合唱吧·集体婚礼？</p>
                  <div>R1SE与300印度舞娘共舞</div>
                </div>
              </li>
              <li>
                <a href="javascript:;"><img src="img/44.jpg" alt="">
                  <div class="time">2019-09-09期</div></a>
                <div class="con">
                  <p>邻家诗话·阿兰伴舞</p>
                  <div>胡夏翻唱经典《浣溪沙》</div>
                </div>
              </li>
              <li>
                <a href="javascript:;"><img src="img/45.jpg" alt="">
                  <div class="time">2019-09-08</div></a>
                <div class="con">
                  <p>达人秀6·“哪吒”来了</p>
                  <div>杨洋江疏影共赴荣耀之路</div>
                </div>
              </li>
              <li>
                <a href="javascript:;"><img src="img/46.jpg" alt="">
                  <div class="time">2019-09-07期
                  </div></a>
                <div class="con">
                  <p>时尚大师·王俊凯哽咽</p>
                  <div>爸爸开出租车上夜班太辛苦</div>
                </div>
              </li>
              <li>
                <a href="javascript:;"><img src="img/47.png" alt="">
                  <div class="time">2019-09-07期</div></a>
                <div class="con">
                  <p>我家小两口·崔生局</p>
                  <div>张智霖劝向佐郭碧婷快生娃</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="ri">
          <div class="tle">
            <h2>综艺排行榜</h2>
          </div>
          <div class="msg">
            <div class="le">
              <ul>
                <li>
                  <a href="javascript:;">
                    <span class="num e">1</span>
                    <span class="tle">中餐厅 第3季</span>
                    <span class="new">2019-09-06期</span>
                  </a>
                </li>
                <li>
                    <a href="javascript:;">
                      <span class="num">6</span>
                      <span class="tle">合唱吧300</span>
                      <span class="new">2019-09-08期</span>
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                      <span class="num e">2</span>
                      <span class="tle">2019中国好声音</span>
                      <span class="new">2019-09-06期</span>
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                      <span class="num">7</span>
                      <span class="tle">我家小两口</span>
                      <span class="new">2019-09-07期</span>
                    </a>
                </li>
                <li>
                  <a href="javascript:;">
                    <span class="num e">3</span>
                    <span class="tle">中国达人秀 第6季</span>
                    <span class="new">2019-09-08期</span>
                  </a>
                </li>
                <li>
                    <a href="javascript:;">
                      <span class="num">8</span>
                      <span class="tle">我要打篮球</span>
                      <span class="new">2019-09-04期</span>
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                      <span class="num">4</span>
                      <span class="tle">脱口秀大会 第2季</span>
                      <span class="new">2019-09-08期</span>
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                      <span class="num">9</span>
                      <span class="tle">喜剧大咖宋小宝</span>
                      <span class="new">2019-09-01期</span>
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                      <span class="num">5</span>
                      <span class="tle">荣耀美少女</span>
                      <span class="new">2019-09-03期</span>
                    </a>
                </li>
                <li>
                  <a href="javascript:;">
                    <span class="num">10</span>
                    <span class="tle">中餐厅加餐了</span>
                    <span class="new">2019-09-06期</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 八楼 动漫 -->
    <div class="cart">
      <div class="auto">
        <div class="le">
          <div class="tle">
            <h2>动漫</h2>
          </div>
          <div class="msg">
            <ul>
              <li>
                <a href="javascript:;">
                  <img src="img/39.jpg" alt="">
                  <div>更新至18集</div>
                </a>
                <div class="tit">
                  <div>西游记之集结篇</div>
                  <p>热血西行，披荆斩棘</p>
                </div>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="img/38.jpg" alt="">
                  <div>24:05</div>
                </a>
                <div class="tit">
                  <div>魔道祖师·羡云篇</div>
                  <p>夷陵老祖血洗不夜天</p>
                </div>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="img/37.jpg" alt="">
                  <div>更新至69集</div>
                </a>
                <div class="tit">
                  <div>斗罗大陆</div>
                  <p>特效爆表！战斗燃炸天际！</p>
                </div>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="img/36.jpg" alt="">
                  <div>更新至09集</div>
                </a>
                <div class="tit">
                  <div>斗破苍穹第3季</div>
                  <p>异火臣服 萧炎掌握佛怒火莲</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="ri">
          <div class="tle">
              <h2>动漫排行榜</h2>
          </div>
          <div class="msg">
            <ul>
              <li>
                <a href="javascript:;">
                  <span class="num e">1</span>
                  <span class="tle">斗罗大陆</span>
                  <span class="new">更新至69集</span>
                </a>
              </li>
              <li>
                  <a href="javascript:;">
                    <span class="num">5</span>
                    <span class="tle">魔道祖师</span>
                    <span class="new">全23集</span>
                  </a>
              </li>
              <li>
                  <a href="javascript:;">
                    <span class="num e">2</span>
                    <span class="tle">斗破苍穹 第3季</span>
                    <span class="new">更新至09集</span>
                  </a>
              </li>
              <li>
                  <a href="javascript:;">
                    <span class="num">6</span>
                    <span class="tle">画江湖之不良人</span>
                    <span class="new">更新至36集</span>
                  </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span class="num e">3</span>
                  <span class="tle">西行纪</span>
                  <span class="new">更新至18集</span>
                </a>
              </li>
              <li>
                  <a href="javascript:;">
                    <span class="num">7</span>
                    <span class="tle">灵剑尊</span>
                    <span class="new">全60集</span>
                  </a>
              </li>
              <li>
                  <a href="javascript:;">
                    <span class="num">4</span>
                    <span class="tle">飞狗NOCO</span>
                    <span class="new">更新至50集</span>
                  </a>
              </li>
              <li>
                  <a href="javascript:;">
                    <span class="num">8</span>
                    <span class="tle">天行九歌</span>
                    <span class="new">更新至82集</span>
                  </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- 九楼 少儿 -->
    <div class="child">
      <div class="tle">
        <h2>少儿</h2>
      </div>
      <div class="msg">
        <ul>
          <li>
            <a href="javascript:;">
              <img src="img/51.jpg" alt="">
              <div class="new">更新至08集</div>
            </a>
            <div class="tit">
              <p>超凡战队</p>
              <span>并肩作战！保卫超级能量场</span>
            </div>
          </li>
          <li>
            <a href="javascript:;">
              <img src="img/52.jpg" alt="">
              <div class="new">更新至13集</div>
            </a>
            <div class="tit">
              <p>小猪佩奇第7季</p>
              <span>粉萌小猪一家亲</span>
            </div>
          </li>
          <li>
            <a href="javascript:;">
              <img src="img/53.jpg" alt="">
              <div class="new">全26集</div>
            </a>
            <div class="tit">
              <p>奔奔小飞车</p>
              <span>百变飞车欢乐冒险</span>
            </div>
          </li>
          <li>
            <a href="javascript:;">
              <img src="img/54.jpg" alt="">
              <div class="new">更新至06集</div>
            </a>
            <div class="tit">
              <p>精灵梦叶罗丽第七季</p>
              <span>融化冰雪拯救人类世界</span>
            </div>
          </li>
          <li>
            <a href="javascript:;">
              <img src="img/55.jpg" alt="">
              <div class="new">21:37</div>
            </a>
            <div class="tit">
              <p>小狮王守护队第二季</p>
              <span>狮子卫队勇敢守护家园</span>
            </div>
          </li>
          <li>
            <a href="javascript:;">
              <img src="img/56.jpg" alt="">
              <div class="new">全33集</div>
            </a>
            <div class="tit">
              <p>舞法天女之炫彩归来</p>
              <span>舞音世界梦幻之行</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 十楼 纪录片 -->
    <div class="record">
      <div class="tle">
          <h2>纪录片</h2>
      </div>
      <div class="msg">
        <ul>
          <li>
            <a href="javascript:;">
              <img src="img/61.jpg" alt="">
              <div class="new">12:27</div>
            </a>
            <div class="tit">
              <p>风味原产地·云南</p>
              <span>陈晓卿安利的地道云南风味</span>
            </div>
          </li>
          <li>
            <a href="javascript:;">
              <img src="img/62.jpg" alt="">
              <div class="new">31:52</div>
            </a>
            <div class="tit">
              <p>水果传</p>
              <span>一场跨越6大洲的水果奇遇</span>
            </div>
          </li>
          <li>
            <a href="javascript:;">
              <img src="img/63.jpg" alt="">
              <div class="new">09:59</div>
            </a>
            <div class="tit">
              <p>一块做好事·99公益日特别记录</p>
            </div>
          </li>
          <li>
            <a href="javascript:;">
              <img src="img/64.jpg" alt="">
              <div class="new">31:40</div>
            </a>
            <div class="tit">
              <p>宵夜江湖</p>
              <span>最野的宵夜最地道的人情</span>
            </div>
          </li>
          <li>
            <a href="javascript:;">
              <img src="img/65.jpg" alt="">
              <div class="new">11:48</div>
            </a>
            <div class="tit">
              <p>风味原产地·潮汕</p>
              <span>解锁当地人才知道的地道美食</span>
            </div>
          </li>
          <li>
            <a href="javascript:;">
              <img src="img/66.jpg" alt="">
              <div class="new">11:39</div>
            </a>
            <div class="tit">
              <p>筑梦匠心·香格里拉非遗匠人</p>
              <span>濒临消失的藏黑陶工艺</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 十一楼 广告 -->
    <div class="gg">
      <div class="le">
        <a href="javascript:;">
          <img src="img/79.jpg" alt="">
        </a>
      </div>
      <div class="ri">
        <a href="javascript:;">
          <img src="img/80.jpg" alt="">
        </a>
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
  export default {
    // 页面上所需的变量
    data(){
      return{

      }
    },
    // 方法
    methods:{

    },
    // 父组件 给的变量
    props:[

    ],
    // 监听函数
    watch:{

    },
    // 计算属性
    computed:{

    }

  }
</script>

<style scoped>
  @import "../assets/css/base.css";
  @import "../assets/css/header.css";
  @import "../assets/css/index.css";
  @import "../assets/css/footer.css";
</style>