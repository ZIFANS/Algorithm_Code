#include <iostream>
#include <algorithm>
using namespace std;
struct node
{
    int data,height;
    node *lchild,*rchild;
}*root;
node* newNode(int v)
{
    node* NODE=new node;
    NODE->data=v;
    NODE->height=1;
    NODE->lchild=NODE->rchild=NULL;
    return NODE;
}
int getHeight(node* root)
{
    if(root==NULL)
        return 0;
    return root->height;
}
int getBalanceFacotr(node* root)
{
    return getHeight(root->lchild)-getHeight(root->rchild);
}
void updateHeight(node *root)
{
    root->height=max(getHeight(root->lchild),getHeight(root->rchild))+1;
}
void L(node* &root)
{
   node* temp=root->rchild;
   root->rchild=temp->lchild;
   temp->lchild=root;
   updateHeight(root);
   updateHeight(temp);
   root=temp;
}
void R(node* &root)
{
    node* temp=root->lchild;
    root->lchild=temp->rchild;
    temp->rchild=root;
    updateHeight(root);
    updateHeight(temp);
    root=temp;
}
void insert1(node* &root,int v)
{
    if(root==NULL)
    {
        root=newNode(v);
        return;
    }
    if(v<root->data)
    {
        insert1(root->lchild,v);
        updateHeight(root);
        if(getBalanceFacotr(root)==2)
        {
            if(getBalanceFacotr(root->lchild)==1)
            {
                R(root);
            }
           else
                if(getBalanceFacotr(root->lchild)==-1)
            {
                L(root->lchild);
                R(root);
            }
        }
    }
    else
    {
        insert1(root->rchild,v);
        updateHeight(root);
        if(getBalanceFacotr(root)==-2)
        {
            if(getBalanceFacotr(root->rchild)==-1)
            {
                L(root);
            }
            else
                if(getBalanceFacotr(root->rchild)==1)
            {
                R(root->rchild);
                L(root);
            }
        }
    }
}
node* create(int a[],int n)
{
    node* root=NULL;
    for(int i=0;i<n;++i)
    {
        insert1(root,a[i]);
    }
    return root;
}
int main ()
{
    int n,v;
    scanf("%d",&n);
    for(int i=0;i<n;++i)
    {
        scanf("%d",&v);
        insert1(root,v);
    }
    printf("%d\n",root->data);
    return 0;
}
