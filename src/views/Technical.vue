<template>
  <Layout>
    <div class="rwt-tab-area rn-section-gap">
      <div class="container">
        <div class="row mb--40">
          <div class="col-lg-12">
            <SectionTitle text-align="center" subtitle="main point" title="TSModel模型" data-aos="fade-up"
                          data-aos-delay="60"/>
          </div>
        </div>
        <Tab :tab-data="tabData"/>
      </div>
    </div>

    <Separator/>
    <div class="rwt-tab-area rn-section-gap">
      <div class="container">
        <div class="row mb--40">
          <div class="col-lg-12">
            <SectionTitle text-align="center" subtitle="main point" title="异常检测" data-aos="fade-up"
                          data-aos-delay="60"/>
          </div>
        </div>
        <Tab1 :tab-data1="tabDataVnet"/>
      </div>
    </div>

    <Separator/>
    <div class="rwt-tab-area rn-section-gap">
      <div class="container">
        <div class="row mb--40">
          <div class="col-lg-12">
            <SectionTitle text-align="center" subtitle="main point" title="缺失值填充" data-aos="fade-up"
                          data-aos-delay="60"/>
          </div>
        </div>
        <Tab :tab-data="tabData3"/>
      </div>
    </div>

    <Separator/>

    <div class="rn-accordion-area rn-section-gap">

      <div class="container">
        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <SectionTitle class="mb--30" text-align="center" subtitle="Q&A" title="问答" data-aos="fade-up"
                          data-aos-delay="60"/>
          </div>
        </div>
        <div class="row mt--35 row--20">
          <div class="col-lg-10 offset-lg-1">
            <Accordion id="accordionExampleOne" :accordion-content="[
                            {
                                id: 'One',
                                title: '深度学习模型在风力发电功率预测任务上相比传统方法的优势是什么？',
                                description: '深度学习模型在风力发电功率预测任务上相比传统方法的主要优势在于其能够从原始数据中学习到更高层次的抽象特征，从而能够更好地捕捉数据的非线性关系和复杂模式。传统方法通常基于手工设计的特征工程，而深度学习模型可以自动学习和优化特征，无需手动干预，使得模型更具适应性和泛化能力。'
                            },
                            {
                                id: 'Two',
                                title: '为什么深度学习模型在风力发电功率预测任务上能够更好地捕捉数据的非线性关系？',
                                description: 'TSModel由多层神经网络组成，每一层都对数据进行一定的变换和抽象。这些多层的非线性变换能够使模型更好地逼近复杂函数，从而捕捉到数据中的非线性关系。相比之下，传统方法通常使用线性或简单的模型，难以表达和捕捉数据中的复杂非线性模式。'
                            },
                            {
                                id: 'Three',
                                title: 'TSModel在风力发电功率预测任务上是否能够自动适应新的数据特征？',
                                description: 'TSModel在风力发电功率预测任务上可以自动适应新的数据特征。由于深度学习模型的参数是通过训练数据自动学习得到的，当新的数据特征出现时，模型可以通过微调已学习的参数来适应新的情况，无需重新设计模型或手动更新特征工程。'
                            },
                            {
                                id: 'Four',
                                title: 'TSModel的整体结构是什么样的？',
                                description: 'TSModel是一个用于风电功率预测的深度学习模型。整体结构包含以下几个主要组件：\n'+
'1. TCN层（Temporal Convolutional Network）：由多个卷积层和批归一化层组成的序列，用于对输入时间序列数据进行特征提取，其中使用了多个不同的卷积核大小和扩张率，以捕捉不同尺度的时间关联。\n'+
'2. LSTM层（Long Short-Term Memory）：两个LSTM层分别用于处理TCN层输出的历史时间序列数据和未来时间序列数据，提取它们的时间依赖关系和上下文信息。\n'+
'3. 分支网络：分别为两个不同特征（\'ROUND(A.POWER,0)\'和\'YD15\'）构建了两个分支网络，用于预测未来的功率输出。\n'+
'4. ResNet层：用于处理未来时间序列数据，帮助模型更好地学习数据中的长期依赖关系。\n'
                            },
                            {
                                id: 'Five',
                                title: '为什么在模型的最后会有两个输出（output1和output2）？',
                                description: '模型的最后有两个输出（output1和output2）是因为模型针对两个不同特征（\'ROUND(A.POWER,0)\'和\'YD15\'）分别预测未来的功率输出。\n'+
'output1对应于\'ROUND(A.POWER,0)\'特征的预测输出，output2对应于\'YD15\'特征的预测输出。模型通过与历史时间序列数据和未来时间序列数据的上下文信息进行拼接后，经过线性变换得到最终的预测结果。\n'
                            },
                        ]" data-aos="fade-up" data-aos-delay="60"/>
          </div>
        </div>
      </div>
    </div>

  </Layout>
</template>

<script>
import Layout from '../components/common/Layout.vue'
import SectionTitle from '../components/elements/sectionTitle/SectionTitle.vue'
import Separator from '../components/elements/separator/Separator.vue'
import Tab from '../components/elements/tab/Tab.vue'
import Tab1 from '../components/elements/tab/Tab1.vue'
import Accordion from '../components/elements/accordion/Accordion.vue'

export default {
  name: 'Technical',
  components: {Layout, SectionTitle, Separator, Tab, Accordion, Tab1},
  data() {
    return {
      tabData: {
        tabImage: 'tsmodel.png',
        tabContent: [
          {
            id: 1,
            menu: 'LSTM层',
            content:
                `<p>
                                长短期记忆网络（Long Short-Term Memory, LSTM）是一种特殊的循环神经网络（Recurrent Neural Network, RNN），专门用于处理序列数据。与普通的RNN相比，LSTM具有更强大的记忆能力和捕捉长期依赖关系的能力，使其在处理时间序列、自然语言处理和其他序列数据任务中非常有效。
							</p>`,
          },
          {
            id: 2,
            menu: 'TCN层',
            content:
                `<p>
                               Temporal Convolutional Network (TCN) 是一种专门用于时间序列数据建模的卷积神经网络结构。相比于传统的循环神经网络 (RNN) 和长短期记忆网络 (LSTM)，TCN利用卷积层的特性能够更好地捕捉时间序列数据中的长期依赖关系，同时具有高效并行计算的能力。它在许多时间序列预测和序列建模任务中表现出色，并且由于其结构的简洁性和高效性而备受关注。
							</p>`,
          },
          {
            id: 3,
            menu: 'ResNet层',
            content: `<p>
							ResNet（残差网络）是一种深度卷积神经网络架构，旨在解决深度神经网络难以训练的问题。ResNet由Kaiming He等人于2015年提出。ResNet的基本单元是残差块（residual block）。如左图所示，每个残差块由两个主要部分组成：主路径（main path）和残差路径（residual path）。主路径包含一系列的卷积层和激活函数，用于提取特征。残差路径就是跳跃连接，直接将前一层的输出添加到主路径的输出上。
                            <br/><br/>ResNet通过引入跳跃连接（skip connection）或称为残差连接来解决这些问题。残差连接是指将前一层的输出直接添加到后续层的输入中，使得信息能够直接跳过一些层，从而保留并传递更多的信息。这样做的好处是，即使网络很深，也能够通过残差路径有效地传播梯度，避免梯度消失或梯度爆炸的问题。

							</p>`,
          }
        ]
      },
      tabDataVnet: {
        tabImage1: 'detection.png',
        tabContent1: [
          {
            id: 1,
            menu: '孤立森林',
            content:
                `<p>
                            采用Isolation Forest算法进行异常值检测。该算法利用随机构建的决策树来评估数据点的异常程度，通过计算平均路径长度来度量数据点的异常程度，并将离群点的'ROUND(A.POWER,0)'和'YD15'列置为空值。
							</p>`,
          },
          {
            id: 2,
            menu: 'LOF',
            content:
                `<p>
                              采用Local Outlier Factor算法进行异常值检测。该算法通过计算数据点与其周围邻域点的密度差异来评估数据点的异常程度，将离群点的'ROUND(A.POWER,0)'和'YD15'列置为空值。
						
                            </p>`,
          },
          {
            id: 3,
            menu: 'DeepLog',
            content: `<p>
采用DeepLog算法进行异常值检测。该算法利用自动编码器来学习数据的特征表示，通过重构误差来评估数据点的异常程度，并将离群点的'ROUND(A.POWER,0)'和'YD15'列置为空值。
该算法利用自动编码器来学习数据的特征表示，通过重构误差来评估数据点的异常程度。自动编码器是一种无监督学习模型，由编码器和解码器两部分组成。构建的自动编码器模型的结构图如左图所示。编码器将输入数据压缩为低维表示，解码器将低维表示重构为原始数据。

							</p>`,
          },
          {
            id: 4,
            menu: 'One-Class SVM',
            content: `<p>
							One-Class SVM算法是一种基于支持向量机的异常值检测方法。该算法将正常数据点映射到高维空间中，构建一个超平面来包围正常数据点，从而将异常点远离超平面。然后，根据数据点到超平面的距离来判断数据点是否为异常值。由于核函数计算比较耗时，在海量数据的场景用的并不多。在该算法中，我们同样使用了'ROUND(A.POWER,0)'和'YD15'列作为特征，将离群点置为空值。
							</p>`,
          }
        ]
      },
      tabData3: {
        tabImage: 'knn.png',
        tabContent: [
          {
            id: 1,
            menu: 'KNN算法',
            content:
                `<p>
                      K近邻算法是一种基本的机器学习算法，常用于分类和回归问题。在用于填充缺失值时，
首先需要确定K的值，即选择多少个最近的邻居来填充缺失值。
K近邻算法的优点在于简单易于实现，它能够利用样本间的相似性来填充缺失值。然而，K近邻算法的缺点在于计算复杂度较高，特别是在数据集较大的情况下。此外，如果K值选择不当，可能会导致过拟合或欠拟合问题。因此，在使用K近邻算法填充缺失值时，需要选择合适的K值，并结合交叉验证等技术来评估填充效果。

							</p>`,
          },
          {
            id: 2,
            menu: '随机森林',
            content:
                `<p>
                       随机森林是一种集成学习算法，它是由多个决策树构成的集合，并通过投票（分类问题）或平均（回归问题）来决定最终的输出结果。随机森林可以用于分类和回归问题，同时也可以用于填充缺失值。
随机森林可以利用多个决策树的集成结果，因此在填充缺失值时，它能够较好地利用样本之间的相似性，提供较为准确的预测。随机森林也相对抗过拟合，能够处理高维数据，并且对异常值的影响较小。随机森林对于样本中含有大量缺失值的情况可能效果不佳，此时可能需要结合其他方法来处理缺失值或者采用特征选择等方法来减少特征的维度。

							</p>`,
          }
        ]
      },
    }
  }
}
</script>

<style></style>