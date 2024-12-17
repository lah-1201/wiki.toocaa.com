# Q1: 不器 L2 可以切割和雕刻哪些材料？
| 切割材料 | 椴木、桐木、松木、胶合板、榉木、胡桃木、竹子、中密度纤维板、皮革、织物、帆布、瓦楞纸、卡纸、塑料、深色亚克力（蓝色除外） |
| :---: | --- |
| 雕刻材料 | 椴木、桐木、松木、胶合板、榉木、胡桃木、竹子、中密度纤维板、皮革、织物、帆布、瓦楞纸、卡纸、塑料、深色亚克力（蓝色除外） |

# Q2: 如何确定材料的切割或雕刻的设置参数？
您可以通过 不器 L2 在线文档查看常见材料的切割和雕刻的参数设置，在线文档网址：  
[https://www.toocaa.com/pages/material-settings-for-toocaa-machines](https://www.toocaa.com/pages/material-settings-for-toocaa-machines)

# Q3: 不器 L2 最大的工作范围是多少？
不器 L2 最大工作范围：415mm × 395mm。

# Q4: 不器 L2 可以切割的木板最大厚度是多少？
10W 激光模组最大切割椴木板厚度是 6mm，20W 激光模组最大切割椴木板厚度是 10mm。

# Q5: 在哪里购买高性价比的耗材，比如木板、亚克力等等？
不器 L2 从全球供应商中选择最具性价比的耗材，您可以登陆 TOOCAA 官网商店购买，官网商店网址：  
[https://www.toocaa.com/collections/materials](https://www.toocaa.com/collections/materials)

# Q6: 为什么扳扣无法压到底部？
扳扣不需要压到底部，只需要压到可以固定激光模组即可。

# Q7: 机器连接电脑后，LightBurn 无法识别机器，应该如何处理？
## 初步检查
1. 请检查您的机器电源是否已经打开。
2. 请确保 USB 线连接稳定。
3. 关闭其他可能与机器通信的控制软件。
4. 确保您在 LightBurn 中选择了正确的设备，并且控制器类型和连接方法正确无误。

## 如果 LightBurn 仍然无法识别机器
### 检查 USB 线
1. 请确保您使用的是 USB 数据线，而不是 USB 充电线，确保 USB 线具有数据传输功能。
2. 如果您的电脑有多个 USB 端口，请尝试将 USB 数据线插入其他的 USB 端口测试。
3. 如果您使用的是 Windows 电脑，发现可以通过 USB 数据线连接但连接一段时间后失效，请检查电脑的电源管理设置：
   1. 打开 **控制面板**。
   2. 单击 **“硬件和声音”**。
   3. 单击 **电源选项**。
   4. 在 “首选计划” 下，单击更改活动电源计划的计划设置。
   5. 单击 **更改高级电源设置**。
   6. 展开 **USB 设置**。
   7. 展开 **USB 选择性挂起设置**，然后从下拉菜单中选择 **已禁用**。
   8. 单击 **“应用”**，然后单击 **“确定”** 关闭窗口。

### 检查驱动程序
如果您在连接到机器时遇到问题，可能需要安装或更新驱动程序。  
需要 CH340 驱动程序。最新版本可从以下网站获得：  
- [WCH](https://www.wch-ic.com/downloads/CH341SER_EXE.html)（适用于 Windows）  
- [Mac](https://www.wch-ic.com/downloads/CH341SER_MAC_ZIP.html)  
- [Linux](https://www.wch-ic.com/downloads/CH341SER_LINUX_ZIP.html)

如果以上方法仍无法解决问题，请访问以下故障排除指南：  
- [LightBurn 连接故障排除](https://docs.lightburnsoftware.com/legacy/Troubleshooting/ConnectionTroubleshooting)  
- [Sparks CH340](https://sparks.gogo.co.nz/ch340.html)  
- [FTDI 驱动](https://ftdichip.com/drivers/vcp-drivers/)  

或者联系我们的技术支持，邮箱：  
[**support@toocaa.com**](mailto:support@toocaa.com)
